package wuilmerj24.plugins.ns

import android.content.Context
import android.content.res.Configuration
import android.content.res.Resources
import android.graphics.Color
import android.graphics.Typeface
import android.os.Handler
import android.os.Looper
import android.util.AttributeSet
import android.util.Log
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.graphics.toColorInt
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import com.mapbox.api.directions.v5.DirectionsCriteria
import com.mapbox.api.directions.v5.DirectionsCriteria.PROFILE_DRIVING
import com.mapbox.api.directions.v5.models.Bearing
import com.mapbox.api.directions.v5.models.DirectionsRoute
import com.mapbox.api.directions.v5.models.RouteOptions
import com.mapbox.bindgen.Expected
import com.mapbox.common.MapboxOptions
import com.mapbox.common.TileStore
import com.mapbox.common.location.AccuracyLevel
import com.mapbox.common.location.DeviceLocationProviderFactory
import com.mapbox.common.location.IntervalSettings
import com.mapbox.common.location.Location
import com.mapbox.common.location.LocationProviderRequest
import com.mapbox.geojson.Point
import com.mapbox.maps.EdgeInsets
import com.mapbox.maps.ImageHolder
import com.mapbox.maps.MapView
import com.mapbox.maps.plugin.LocationPuck2D
import com.mapbox.maps.plugin.animation.camera
import com.mapbox.maps.plugin.annotation.annotations
import com.mapbox.maps.plugin.annotation.generated.CircleAnnotationManager
import com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions
import com.mapbox.maps.plugin.annotation.generated.PointAnnotationManager
import com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions
import com.mapbox.maps.plugin.annotation.generated.createCircleAnnotationManager
import com.mapbox.maps.plugin.annotation.generated.createPointAnnotationManager
import com.mapbox.maps.plugin.gestures.gestures
import com.mapbox.maps.plugin.locationcomponent.location
import com.mapbox.navigation.base.ExperimentalMapboxNavigationAPI
import com.mapbox.navigation.base.ExperimentalPreviewMapboxNavigationAPI
import com.mapbox.navigation.base.TimeFormat
import com.mapbox.navigation.base.extensions.applyDefaultNavigationOptions
import com.mapbox.navigation.base.extensions.applyLanguageAndVoiceUnitOptions
import com.mapbox.navigation.base.formatter.DistanceFormatterOptions
import com.mapbox.navigation.base.formatter.UnitType
import com.mapbox.navigation.base.options.AlertServiceOptions
import com.mapbox.navigation.base.options.CopilotOptions
import com.mapbox.navigation.base.options.DeviceProfile
import com.mapbox.navigation.base.options.DeviceType
import com.mapbox.navigation.base.options.DomainTilesOptions
import com.mapbox.navigation.base.options.EHorizonOptions
import com.mapbox.navigation.base.options.EventsAppMetadata
import com.mapbox.navigation.base.options.HistoryRecorderOptions
import com.mapbox.navigation.base.options.IncidentsOptions
import com.mapbox.navigation.base.options.LocationOptions
import com.mapbox.navigation.base.options.NavigationOptions
import com.mapbox.navigation.base.options.NavigationTileDataDomain
import com.mapbox.navigation.base.options.RerouteOptions
import com.mapbox.navigation.base.options.RoadObjectMatcherOptions
import com.mapbox.navigation.base.options.RoutingTilesOptions
import com.mapbox.navigation.base.options.TrafficOverrideOptions
import com.mapbox.navigation.base.route.NavigationRoute
import com.mapbox.navigation.base.route.NavigationRouterCallback
import com.mapbox.navigation.base.route.RouteAlternativesOptions
import com.mapbox.navigation.base.route.RouteRefreshOptions
import com.mapbox.navigation.base.route.RouterFailure
import com.mapbox.navigation.base.trip.model.RouteProgressState
import com.mapbox.navigation.core.MapboxNavigation
import com.mapbox.navigation.core.directions.session.RoutesObserver
import com.mapbox.navigation.core.formatter.MapboxDistanceFormatter
import com.mapbox.navigation.core.lifecycle.MapboxNavigationApp
import com.mapbox.navigation.core.replay.route.ReplayProgressObserver
import com.mapbox.navigation.core.replay.route.ReplayRouteMapper
import com.mapbox.navigation.core.trip.session.LocationMatcherResult
import com.mapbox.navigation.core.trip.session.LocationObserver
import com.mapbox.navigation.core.trip.session.RouteProgressObserver
import com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver
import com.mapbox.navigation.tripdata.maneuver.api.MapboxManeuverApi
import com.mapbox.navigation.tripdata.progress.api.MapboxTripProgressApi
import com.mapbox.navigation.tripdata.progress.model.DistanceRemainingFormatter
import com.mapbox.navigation.tripdata.progress.model.EstimatedTimeToArrivalFormatter
import com.mapbox.navigation.tripdata.progress.model.PercentDistanceTraveledFormatter
import com.mapbox.navigation.tripdata.progress.model.TimeRemainingFormatter
import com.mapbox.navigation.tripdata.progress.model.TripProgressUpdateFormatter
import com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer
import com.mapbox.navigation.ui.components.maneuver.view.MapboxManeuverView
import com.mapbox.navigation.ui.components.maps.camera.view.MapboxRecenterButton
import com.mapbox.navigation.ui.components.maps.camera.view.MapboxRouteOverviewButton
import com.mapbox.navigation.ui.components.tripprogress.view.MapboxTripProgressView
import com.mapbox.navigation.ui.components.voice.view.MapboxSoundButton
import com.mapbox.navigation.ui.maps.NavigationStyles
import com.mapbox.navigation.ui.maps.camera.NavigationCamera
import com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource
import com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationBasicGesturesHandler
import com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState
import com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions
import com.mapbox.navigation.ui.maps.location.NavigationLocationProvider
import com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowApi
import com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowView
import com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions
import com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi
import com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineView
import com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineApiOptions
import com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineViewOptions
import com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources
import com.mapbox.navigation.voice.api.MapboxSpeechApi
import com.mapbox.navigation.voice.api.MapboxVoiceInstructionsPlayer
import com.mapbox.navigation.voice.model.SpeechAnnouncement
import com.mapbox.navigation.voice.model.SpeechError
import com.mapbox.navigation.voice.model.SpeechValue
import com.mapbox.navigation.voice.model.SpeechVolume
import java.io.File
import java.net.URI
import java.util.Calendar
import java.util.Date
import java.util.Locale

enum class NavRouteState {
    INITIALIZED,
    TRACKING,
    OFF_ROUTE,
    UNCERTAIN,
    COMPLETE
}

interface NavRouteCallback {
    fun onRouteRequestStarted() {}
    fun onRoutesReady(routes: List<NavigationRoute>) {}
    fun onRouteCanceled() {}
    fun onRouteFailed(errorMessage: String) {}
}

interface NavLocationCallback {
    fun onLocationChanged(latitude: Double, longitude: Double, bearing: Float?, speed: Float?)
}

interface NavRouteProgressCallback {
    fun onRouteProgress(
            state: NavRouteState,
            distanceRemainingMeters: Double,
            durationRemainingSeconds: Double,
            estimatedTimeToArrivalEpochSeconds: Long
    )
}

@OptIn(ExperimentalPreviewMapboxNavigationAPI::class, ExperimentalMapboxNavigationAPI::class)
class MapboxNavViewForFrameworks
@JvmOverloads
constructor(private val context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0) :
        ConstraintLayout(context, attrs, defStyleAttr), DefaultLifecycleObserver {
    private lateinit var loadingOverlay: FrameLayout

    private fun setupLoading() {
        loadingOverlay =
                FrameLayout(context).apply {
                    setBackgroundColor(Color.parseColor("#80000000")) // negro semitransparente
                    visibility = View.GONE
                    isClickable = true
                    isFocusable = true
                }

        val progressBar =
                ProgressBar(context).apply {
                    isIndeterminate = true
                    indeterminateDrawable.setTint(Color.GREEN)
                }

        val progressParams =
                FrameLayout.LayoutParams(
                                ViewGroup.LayoutParams.WRAP_CONTENT,
                                ViewGroup.LayoutParams.WRAP_CONTENT
                        )
                        .apply { gravity = Gravity.CENTER }

        loadingOverlay.addView(progressBar, progressParams)

        val overlayParams =
                ConstraintLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                )

        // 🔥 constraints para cubrir TODO
        overlayParams.topToTop = ConstraintLayout.LayoutParams.PARENT_ID
        overlayParams.bottomToBottom = ConstraintLayout.LayoutParams.PARENT_ID
        overlayParams.startToStart = ConstraintLayout.LayoutParams.PARENT_ID
        overlayParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID

        addView(loadingOverlay, overlayParams)
    }

    fun showLoading() {
        loadingOverlay.visibility = View.VISIBLE
    }

    fun hideLoading() {
        loadingOverlay.visibility = View.GONE
    }

    private var routeCallback: NavRouteCallback? = null
    private var locationCallback: NavLocationCallback? = null
    private var routeProgressCallback: NavRouteProgressCallback? = null

    fun setRouteCallback(callback: NavRouteCallback?) {
        this.routeCallback = callback
    }

    fun setLocationCallback(callback: NavLocationCallback?) {
        locationCallback = callback
    }

    fun setRouteProgressCallback(callback: NavRouteProgressCallback?) {
        routeProgressCallback = callback
    }

    fun clearAllCallback() {
        routeCallback = null
        locationCallback = null
        routeProgressCallback = null
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        clearAllCallback()
    }

    var isSimulate: Boolean = false
        set(value) {
            field = value
        }
    private companion object {
        private const val BUTTON_ANIMATION_DURATION = 1500L
        private const val TAG = "MapboxNavViewForFrameworks"
    }

    lateinit var mapView: MapView
    lateinit var tripProgressView: MapboxTripProgressView
    lateinit var distanceRemaining: TextView
    lateinit var timeRemaining: TextView
    lateinit var eta: TextView
    lateinit var stop: ImageView
    lateinit var maneuverView: MapboxManeuverView
    lateinit var soundButton: MapboxSoundButton
    lateinit var routeOverview: MapboxRouteOverviewButton
    lateinit var recenter: MapboxRecenterButton
    lateinit var locationProvider: NavigationLocationProvider
    lateinit var replayProgressObserver: ReplayProgressObserver
    val replayRouteMapper = ReplayRouteMapper()
    lateinit var navigationCamera: NavigationCamera
    lateinit var viewportDataSource: MapboxNavigationViewportDataSource

    private val pixelDensity = Resources.getSystem().displayMetrics.density
    private val overviewPadding: EdgeInsets by lazy {
        EdgeInsets(
                140.0 * pixelDensity,
                40.0 * pixelDensity,
                120.0 * pixelDensity,
                40.0 * pixelDensity
        )
    }
    private val landscapeOverviewPadding: EdgeInsets by lazy {
        EdgeInsets(
                30.0 * pixelDensity,
                380.0 * pixelDensity,
                110.0 * pixelDensity,
                20.0 * pixelDensity
        )
    }
    private val followingPadding: EdgeInsets by lazy {
        EdgeInsets(
                180.0 * pixelDensity,
                40.0 * pixelDensity,
                150.0 * pixelDensity,
                40.0 * pixelDensity
        )
    }
    private val landscapeFollowingPadding: EdgeInsets by lazy {
        EdgeInsets(
                30.0 * pixelDensity,
                380.0 * pixelDensity,
                110.0 * pixelDensity,
                40.0 * pixelDensity
        )
    }

    lateinit var maneuverApi: MapboxManeuverApi
    lateinit var tripProgressApi: MapboxTripProgressApi
    lateinit var routeLineApi: MapboxRouteLineApi
    lateinit var routeLineView: MapboxRouteLineView
    val routeArrowApi: MapboxRouteArrowApi = MapboxRouteArrowApi()
    lateinit var routeArrowView: MapboxRouteArrowView
    var isVoiceInstructionsMuted = false
        set(value) {
            field = value
            if (value) {
                soundButton.muteAndExtend(BUTTON_ANIMATION_DURATION)
                voiceInstructionsPlayer.volume(SpeechVolume(0f))
            } else {
                soundButton.unmuteAndExtend(BUTTON_ANIMATION_DURATION)
                voiceInstructionsPlayer.volume(SpeechVolume(1f))
            }
        }
    lateinit var speechApi: MapboxSpeechApi
    lateinit var voiceInstructionsPlayer: MapboxVoiceInstructionsPlayer
    val voiceInstructionsObserver = VoiceInstructionsObserver { voiceInstructions ->
        speechApi.generate(voiceInstructions, speechCallback)
    }
    val speechCallback =
            MapboxNavigationConsumer<Expected<SpeechError, SpeechValue>> { expected ->
                expected.fold(
                        { error ->
                            // play the instruction via fallback text-to-speech engine
                            voiceInstructionsPlayer.play(
                                    error.fallback,
                                    voiceInstructionsPlayerCallback
                            )
                        },
                        { value ->
                            // play the sound file from the external generator
                            voiceInstructionsPlayer.play(
                                    value.announcement,
                                    voiceInstructionsPlayerCallback
                            )
                        }
                )
            }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        setupLoading()
    }
    val voiceInstructionsPlayerCallback =
            MapboxNavigationConsumer<SpeechAnnouncement> { value ->
                // remove already consumed file to free-up space
                speechApi.clean(value)
            }

    val navigationLocationProvider = NavigationLocationProvider()

    val locationObserver =
            object : LocationObserver {
                var firstLocationUpdateReceived = false

                override fun onNewRawLocation(rawLocation: Location) {
                    // not handled
                    Log.d(TAG, "onNewRawLocation " + rawLocation)
                    locationCallback?.onLocationChanged(
                            latitude = rawLocation.latitude,
                            longitude = rawLocation.longitude,
                            bearing = rawLocation.bearing?.toFloat(),
                            speed = rawLocation.speed?.toFloat()
                    )
                }

                override fun onNewLocationMatcherResult(
                        locationMatcherResult: LocationMatcherResult
                ) {
                    Log.d(TAG, "onNewLocationMatcherResult")

                    val enhancedLocation = locationMatcherResult.enhancedLocation
                    locationCallback?.onLocationChanged(
                            latitude = enhancedLocation.latitude,
                            longitude = enhancedLocation.longitude,
                            bearing = enhancedLocation.bearing?.toFloat(),
                            speed = enhancedLocation.speed?.toFloat()
                    )
                    // update location puck's position on the map
                    navigationLocationProvider.changePosition(
                            location = enhancedLocation,
                            keyPoints = locationMatcherResult.keyPoints,
                    )

                    // update camera position to account for new location
                    viewportDataSource.onLocationChanged(enhancedLocation)
                    viewportDataSource.evaluate()

                    // if this is the first location update the activity has received,
                    // it's best to immediately move the camera to the current user location
                    if (!firstLocationUpdateReceived) {
                        firstLocationUpdateReceived = true
                        navigationCamera.requestNavigationCameraToOverview(
                                stateTransitionOptions =
                                        NavigationCameraTransitionOptions.Builder()
                                                .maxDuration(0) // instant transition
                                                .build()
                        )
                    }
                }
            }

    val routeProgressObserver = RouteProgressObserver { routeProgress ->
        // update the camera position to account for the progressed fragment of the route

        val state =
                when {
                    routeProgress.currentState == RouteProgressState.TRACKING ->
                            NavRouteState.TRACKING
                    routeProgress.currentState == RouteProgressState.OFF_ROUTE ->
                            NavRouteState.OFF_ROUTE
                    routeProgress.currentState == RouteProgressState.UNCERTAIN ->
                            NavRouteState.UNCERTAIN
                    routeProgress.distanceRemaining <= 5.0 -> NavRouteState.COMPLETE
                    else -> NavRouteState.INITIALIZED
                }

        viewportDataSource.onRouteProgressChanged(routeProgress)
        viewportDataSource.evaluate()

        // draw the upcoming maneuver arrow on the map
        val style = mapView.mapboxMap.style
        if (style != null) {
            val maneuverArrowResult = routeArrowApi.addUpcomingManeuverArrow(routeProgress)
            routeArrowView.renderManeuverUpdate(style, maneuverArrowResult)
        }

        // update top banner with maneuver instructions
        val maneuvers = maneuverApi.getManeuvers(routeProgress)
        maneuvers.fold(
                { error -> Log.d(TAG, error.errorMessage.toString()) },
                {
                    maneuverView.visibility = View.VISIBLE
                    maneuverView.renderManeuvers(maneuvers)
                }
        )

        val progress = tripProgressApi.getTripProgress(routeProgress)

        val meters = progress.distanceRemaining
        val metros = formatKm(meters.toInt())
        distanceRemaining.text = metros

        val totalSeconds = progress.totalTimeRemaining
        timeRemaining.text = formatTimeRemaining(totalSeconds)

        val etaMillis = progress.estimatedTimeToArrival
        eta.text = formatEstimatedTimeOfArrival(etaMillis)
        routeProgressCallback?.onRouteProgress(
                state = state,
                distanceRemainingMeters = meters,
                durationRemainingSeconds = totalSeconds,
                estimatedTimeToArrivalEpochSeconds = (System.currentTimeMillis() / 1000) + etaMillis
        )
    }

    var showLogs: Boolean = true
        set(value) {
            field = value
        }

    private fun funShoLogs(msg: String) {
        if (showLogs) {
            Log.d(TAG, msg)
        }
    }

    var navigationOptions = NavigationOptions.Builder(context)

    fun setNavOptionsEnableSensors(enableSensors: Boolean) {
        try {
            navigationOptions.enableSensors(enableSensors)
            funShoLogs("call set enableSensors OK ${enableSensors.toString()}")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsCopilotOptions(
            maxHistoryFileLengthMillis: Long,
            maxHistoryFilesPerSession: Int,
            userId: String,
            shouldRecordFreeDriveHistories: Boolean,
            shouldRecordRouteLineEvents: Boolean,
            shouldSendHistoryOnlyWithFeedback: Boolean
    ) {
        try {
            val copilotOptions =
                    CopilotOptions.Builder()
                            .maxHistoryFileLengthMillis(maxHistoryFileLengthMillis)
                            .maxHistoryFilesPerSession(maxHistoryFilesPerSession)
                            .userId(userId)
                            .shouldRecordFreeDriveHistories(shouldRecordFreeDriveHistories)
                            .shouldRecordRouteLineEvents(shouldRecordRouteLineEvents)
                            .shouldSendHistoryOnlyWithFeedback(shouldSendHistoryOnlyWithFeedback)
                            .build()
            navigationOptions.copilotOptions(copilotOptions)
            funShoLogs(
                    "call set setNavOptionsCopilotOptions OK maxHistoryFileLengthMillis:${maxHistoryFileLengthMillis}| maxHistoryFilesPerSession${maxHistoryFilesPerSession}| userId ${shouldRecordFreeDriveHistories} | shouldRecordRouteLineEvents ${shouldRecordRouteLineEvents}| shouldSendHistoryOnlyWithFeedback ${shouldSendHistoryOnlyWithFeedback}"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsEHorizonOptions(
            collectServiceAreas: Boolean? = true,
            collectBridges: Boolean? = true,
            collectMergingAreas: Boolean? = true,
            collectRestrictedAreas: Boolean? = true,
            collectTunnels: Boolean? = true,
            length: Double,
            expansion: Int,
            branchLength: Double,
            minTimeDeltaBetweenUpdates: Double,
    ) {
        try {
            val alertServiceOptions =
                    AlertServiceOptions.Builder()
                            .collectServiceAreas(collectServiceAreas!!)
                            .collectBridges(collectBridges!!)
                            .collectMergingAreas(collectMergingAreas!!)
                            .collectRestrictedAreas(collectRestrictedAreas!!)
                            .collectTunnels(collectTunnels!!)
                            .build()

            val eHorizonOptions =
                    EHorizonOptions.Builder()
                            .length(length)
                            .expansion(expansion)
                            .branchLength(branchLength)
                            .minTimeDeltaBetweenUpdates(minTimeDeltaBetweenUpdates)
                            .alertServiceOptions(alertServiceOptions)
                            .build()
            navigationOptions.eHorizonOptions(eHorizonOptions)
            funShoLogs(
                    "call set setNavOptionsEHorizonOptions OK \"\"\"\n" +
                            "        ===== PARÁMETROS RECIBIDOS =====\n" +
                            "        collectServiceAreas: \$collectServiceAreas\n" +
                            "        collectBridges: \$collectBridges\n" +
                            "        collectMergingAreas: \$collectMergingAreas\n" +
                            "        collectRestrictedAreas: \$collectRestrictedAreas\n" +
                            "        collectTunnels: \$collectTunnels\n" +
                            "        length: \$length\n" +
                            "        expansion: \$expansion\n" +
                            "        branchLength: \$branchLength\n" +
                            "        minTimeDeltaBetweenUpdates: \$minTimeDeltaBetweenUpdates\n" +
                            "        =================================\n" +
                            "    \"\"\".trimIndent()"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsDistanceFormatterOptions(unitType: UnitType, locale: Locale) {
        try {
            val distanceFormatterOptions =
                    DistanceFormatterOptions.Builder(context)
                            .unitType(unitType)
                            .locale(locale)
                            .build()
            navigationOptions.distanceFormatterOptions(distanceFormatterOptions)
            funShoLogs(
                    "call set setNavOptionsDistanceFormatterOptions OK unitType ${unitType}| locale ${locale.toString()}"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsDeviceProfile(
            deviceType: DeviceType,
    ) {
        try {
            val deviceProfile = DeviceProfile.Builder().deviceType(deviceType).build()
            navigationOptions.deviceProfile(deviceProfile)
            funShoLogs("call set setNavOptionsDeviceProfile OK deviceType ${deviceType}")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsEventsAppMetadata(
            name: String,
            version: String,
            sessionId: String,
            userId: String
    ) {
        try {
            val eventsAppMetadata =
                    EventsAppMetadata.Builder(name, version)
                            .sessionId(sessionId)
                            .userId(userId)
                            .build()
            navigationOptions.eventsAppMetadata(eventsAppMetadata)
            val msg = "name: $name, version: $version, sessionId: $sessionId, userId: $userId"
            funShoLogs("call set setNavOptionsEventsAppMetadata OK ${msg.toString()}")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsHistoryRecorderOptions(shouldRecordRouteLineEvents: Boolean) {
        try {
            val externalFilesDir = context.getExternalFilesDir(null)
            val path = externalFilesDir?.path + "/mapbox_history"
            val javaFile = File(path)
            if (!javaFile.exists()) {
                javaFile.mkdirs()
            }

            val historyRecorderOptions =
                    HistoryRecorderOptions.Builder()
                            .fileDirectory(path)
                            .shouldRecordRouteLineEvents(shouldRecordRouteLineEvents)
                            .build()
            navigationOptions.historyRecorderOptions(historyRecorderOptions)

            funShoLogs(
                    "call set setNavOptionsHistoryRecorderOptions OK shouldRecordRouteLineEvents ${shouldRecordRouteLineEvents.toString()}"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsIncidentsOptions(apiUrl: String, graph: String) {
        try {
            val incidentsOptions = IncidentsOptions.Builder().apiUrl(apiUrl).graph(graph).build()

            navigationOptions.incidentsOptions(incidentsOptions)

            funShoLogs("call set setNavOptionsIncidentsOptions OK apiUrl $apiUrl graph $graph")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsLocationProviderRequest(
            interval: Long,
            minimumInterval: Long,
            maximumInterval: Long,
            accuracyLevel: AccuracyLevel,
            displacement: Float,
            factory: DeviceLocationProviderFactory?,
            locationProviderType: String
    ) {
        try {
            val intervalSettings =
                    IntervalSettings.Builder()
                            .interval(interval)
                            .minimumInterval(minimumInterval)
                            .maximumInterval(maximumInterval)
                            .build()

            val locationProviderRequest =
                    LocationProviderRequest.Builder()
                            .accuracy(accuracyLevel)
                            .displacement(displacement)
                            .interval(intervalSettings)
                            .build()

            val locationOptions =
                    LocationOptions.Builder()
                            .request(locationProviderRequest)
                            .locationProviderFactory(factory!!, locationProviderType)
                            .build()

            navigationOptions.locationOptions(locationOptions)

            val msg =
                    "interval: $interval ms, minimumInterval: $minimumInterval ms, maximumInterval: $maximumInterval ms, accuracyLevel: $accuracyLevel, displacement: ${displacement}m, factory: ${factory?.javaClass?.simpleName ?: "null"}"
            funShoLogs("call set setNavOptionsLocationProviderRequest OK $msg")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsNavigatorPredictionMillis(navigatorPredictionMillis: Long) {
        try {
            navigationOptions.navigatorPredictionMillis(navigatorPredictionMillis)
            funShoLogs(
                    "call set setNavOptionsNavigatorPredictionMillis OK navigatorPredictionMillis $navigatorPredictionMillis"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsRerouteOptions(
            avoidManeuverSeconds: Int,
    ) {
        try {

            val rerouteOptions = RerouteOptions.Builder().avoidManeuverSeconds(avoidManeuverSeconds)
            // .rerouteStrategyForMapMatchedRoutes()
            funShoLogs(
                    "call set setNavOptionsRerouteOptions OK avoidManeuverSeconds $avoidManeuverSeconds"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsNativeRouteObject(nativeRouteObject: Boolean) {
        try {
            navigationOptions.nativeRouteObject(nativeRouteObject)
            funShoLogs(
                    "call set setNavOptionsNativeRouteObject OK nativeRouteObject$nativeRouteObject"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsRoadObjectMatcherOptions(
            openLRMaxDistanceToNode: Double,
            matchingGraphType: NavigationTileDataDomain
    ) {
        try {
            val roadObjectMatcherOptions =
                    RoadObjectMatcherOptions.Builder()
                            .openLRMaxDistanceToNode(openLRMaxDistanceToNode)
                            .matchingGraphType(matchingGraphType)
                            .build()
            navigationOptions.roadObjectMatcherOptions(roadObjectMatcherOptions)
            funShoLogs(
                    "call set setNavOptionsRoadObjectMatcherOptions OK openLRMaxDistanceToNode $openLRMaxDistanceToNode matchingGraphType $matchingGraphType"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsRouteAlternativesOptions(avoidManeuverSeconds: Int, intervalMillis: Long) {
        try {
            val routeAlternativesOptions =
                    RouteAlternativesOptions.Builder()
                            .avoidManeuverSeconds(avoidManeuverSeconds)
                            .intervalMillis(intervalMillis)
                            .build()
            navigationOptions.routeAlternativesOptions(routeAlternativesOptions)
            funShoLogs(
                    "call set setNavOptionsRouteAlternativesOptions OK avoidManeuverSeconds $avoidManeuverSeconds intervalMillis $intervalMillis"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsRouteRefreshOptions(intervalMillis: Long) {
        try {
            val routeRefreshOptions =
                    RouteRefreshOptions.Builder().intervalMillis(intervalMillis).build()
            navigationOptions.routeRefreshOptions(routeRefreshOptions)
            funShoLogs(
                    "call set setNavOptionsRouteRefreshOptions OK intervalMillis $intervalMillis"
            )
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsRoutingTilesOptions(
            tilesBaseUri: String,
            tilesDataset: String,
            tilesProfile: String,
            fallbackOfflineTilesVersion: String,
            filePath: String,
            tileStore: TileStore,
            minDaysBetweenServerAndLocalTilesVersion: Int,
            hdTilesOptions: DomainTilesOptions
    ) {
        try {
            val routingTilesOptions =
                    RoutingTilesOptions.Builder()
                            .tilesBaseUri(URI.create(tilesBaseUri))
                            .tilesDataset(tilesDataset)
                            .tilesProfile(tilesProfile)
                            .fallbackOfflineTilesVersion(fallbackOfflineTilesVersion)
                            .filePath(filePath)
                            .tileStore(tileStore)
                            .minDaysBetweenServerAndLocalTilesVersion(
                                    minDaysBetweenServerAndLocalTilesVersion
                            )
                            .hdTilesOptions(hdTilesOptions)
                            .build()
            navigationOptions.routingTilesOptions(routingTilesOptions)
            val msg =
                    "URI: $tilesBaseUri, Dataset: $tilesDataset, Profile: $tilesProfile, " +
                            "Fallback: $fallbackOfflineTilesVersion, Path: $filePath, " +
                            "Store: ${tileStore::class.java.simpleName}, MinDays: $minDaysBetweenServerAndLocalTilesVersion, " +
                            "HDOptions: ${hdTilesOptions?.let { "configured" } ?: "default"}"

            funShoLogs("call set setNavOptionsRoutingTilesOptions OK $msg")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsTimeFormatType(timeFormatType: Int) {
        try {
            val res =
                    if (timeFormatType == 1) {
                        TimeFormat.TWELVE_HOURS
                    } else {
                        TimeFormat.TWENTY_FOUR_HOURS
                    }

            navigationOptions.timeFormatType(res)
            funShoLogs("call set setNavOptionsTimeFormatType OK timeFormatType $timeFormatType")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setNavOptionsTrafficOverrideOptions(
            isEnabled: Boolean,
            lowCongestionRange: IntRange,
            moderateCongestionRange: IntRange,
            heavyCongestionRange: IntRange,
            severeCongestionRange: IntRange,
            highSpeedThresholdInKmPerHour: Int,
    ) {
        try {
            val trafficOverrideOptions =
                    TrafficOverrideOptions.Builder()
                            .isEnabled(false)
                            .lowCongestionRange(lowCongestionRange) // 80-100% velocidad -> Azul
                            .moderateCongestionRange(moderateCongestionRange) // 60-80% -> Amarillo
                            .heavyCongestionRange(heavyCongestionRange) // 30-60% -> Rojo
                            .severeCongestionRange(severeCongestionRange) // 0-30%  -> Marrón
                            .highSpeedThresholdInKmPerHour(
                                    highSpeedThresholdInKmPerHour
                            ) // Filtro para autopistas rápidas.
                            .build()
            navigationOptions.trafficOverrideOptions(trafficOverrideOptions)
            val msg =
                    "enabled=$isEnabled, low=$lowCongestionRange, moderate=$moderateCongestionRange, " +
                            "heavy=$heavyCongestionRange, severe=$severeCongestionRange, " +
                            "highSpeedThreshold=${highSpeedThresholdInKmPerHour}km/h"
            funShoLogs("call set setNavOptionsTrafficOverrideOptions OK $msg")
        } catch (e: Exception) {
            Log.e(TAG, e.message.toString())
        }
    }

    fun setLenguaje(lenguaje: String, country: String) {
        val locale = Locale(lenguaje, country)
        speechApi = MapboxSpeechApi(context, locale.toString())
        voiceInstructionsPlayer = MapboxVoiceInstructionsPlayer(context, locale.toString())
    }

    fun inicializar(accessToken: String) {
        MapboxOptions.accessToken = accessToken

        val finalOptions =
                if (navigationOptions != null) {
                    Log.d("MapboxSetup", "Using provided NavigationOptions")
                    navigationOptions.build()
                } else {
                    Log.d("MapboxSetup", "Creating default NavigationOptions")
                    NavigationOptions.Builder(context.applicationContext).build()
                }

        MapboxNavigationApp.setup(finalOptions)

        MapboxNavigationApp.attach(context as LifecycleOwner)

        post {
            val nav = MapboxNavigationApp.current()
            if (nav != null) {
                mapboxNavigation = nav
                Log.d(TAG, "¡Éxito! Navigation ya no es null")
                initMapboxObservers()
            } else {
                // Reintento agresivo si sigue siendo null
                Log.w(TAG, "Navigation sigue siendo null, reintentando...")
                postDelayed(
                        {
                            val retryNav = MapboxNavigationApp.current()
                            if (retryNav != null) {
                                this.mapboxNavigation = retryNav
                                initMapboxObservers()
                            } else {
                                Log.e(TAG, "ERROR FATAL: No se pudo obtener la instancia de Mapbox")
                            }
                        },
                        500
                ) // Esperar 500ms adicionales
            }
        }

        addView(createMapView())
        addView(createTripProgressCard())
        addView(createManeuverView())
        addView(createButtonSoundButton())
        addView(createRouteOverviewButtonView())
        addView(createRecenterButtonView())
    }

    var navigationStyles: String = NavigationStyles.NAVIGATION_DAY_STYLE
        set(value) {
            field = value
        }

    private var requestId: Long? = null

    private fun initMapboxObservers() {
        viewportDataSource = MapboxNavigationViewportDataSource(mapView.mapboxMap)
        navigationCamera = NavigationCamera(mapView.mapboxMap, mapView.camera, viewportDataSource)
        // set the animations lifecycle listener to ensure the NavigationCamera stops
        // automatically following the user location when the map is interacted with
        mapView.camera.addCameraAnimationsLifecycleListener(
                NavigationBasicGesturesHandler(navigationCamera)
        )
        navigationCamera.registerNavigationCameraStateChangeObserver { navigationCameraState ->
            // shows/hide the recenter button depending on the camera state
            when (navigationCameraState) {
                NavigationCameraState.TRANSITION_TO_FOLLOWING, NavigationCameraState.FOLLOWING ->
                        recenter.visibility = View.INVISIBLE
                NavigationCameraState.TRANSITION_TO_OVERVIEW,
                NavigationCameraState.OVERVIEW,
                NavigationCameraState.IDLE -> recenter.visibility = View.VISIBLE
            }
        }

        // set the padding values depending on screen orientation and visible view layout
        if (this.resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            viewportDataSource.overviewPadding = landscapeOverviewPadding
        } else {
            viewportDataSource.overviewPadding = overviewPadding
        }
        if (this.resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            viewportDataSource.followingPadding = landscapeFollowingPadding
        } else {
            viewportDataSource.followingPadding = followingPadding
        }

        // make sure to use the same DistanceFormatterOptions across different features
        val distanceFormatterOptions = DistanceFormatterOptions.Builder(context).build()

        // initialize maneuver api that feeds the data to the top banner maneuver view
        maneuverApi = MapboxManeuverApi(MapboxDistanceFormatter(distanceFormatterOptions))

        // initialize bottom progress view
        tripProgressApi =
                MapboxTripProgressApi(
                        TripProgressUpdateFormatter.Builder(context)
                                .distanceRemainingFormatter(
                                        DistanceRemainingFormatter(distanceFormatterOptions)
                                )
                                .timeRemainingFormatter(TimeRemainingFormatter(context))
                                .percentRouteTraveledFormatter(PercentDistanceTraveledFormatter())
                                .estimatedTimeToArrivalFormatter(
                                        EstimatedTimeToArrivalFormatter(
                                                context,
                                                TimeFormat.NONE_SPECIFIED
                                        )
                                )
                                .build()
                )

        // initialize voice instructions api and the voice instruction player

        val routeLineApiOptions =
                MapboxRouteLineApiOptions.Builder()
                        .vanishingRouteLineEnabled(true)
                        .styleInactiveRouteLegsIndependently(true)
                        .build()
        routeLineApi = MapboxRouteLineApi(routeLineApiOptions)

        val customColorResources =
                RouteLineColorResources.Builder()
                        // .routeDefaultColor("#FFCC00".toColorInt())
                        // .inActiveRouteLegsColor(Color.GREEN)
                        .build()
        val routeLineViewOptions =
                MapboxRouteLineViewOptions.Builder(context)
                        // .routeLineBlurEnabled(true)
                        .routeLineBelowLayerId("road-label-navigation")
                        // .applyTrafficColorsToRouteLineBlur(true)
                        // .routeLineColorResources(customColorResources)
                        .build()
        routeLineView = MapboxRouteLineView(routeLineViewOptions)

        // initialize maneuver arrow view to draw arrows on the map
        val routeArrowOptions = RouteArrowOptions.Builder(context).build()
        routeArrowView = MapboxRouteArrowView(routeArrowOptions)

        // load map style
        mapView.mapboxMap.loadStyle(navigationStyles) {
            // Ensure that the route line related layers are present before the route arrow
            routeLineView.initializeLayers(it)

            // add long click listener that search for a route to the clicked destination
            if (isSimulate) {
                mapView.gestures.addOnMapLongClickListener { point ->
                    findRoute(point)
                    true
                }
            }
        }

        // initialize view interactions
        stop.setOnClickListener {
            mapboxNavigation.cancelRouteRequest(requestId!!)
            val handler = Handler(Looper.getMainLooper())
            handler.postDelayed({ clearRouteAndStopNavigation() }, 500) // 2000 ms = 2 segundos
            routeCallback?.onRouteCanceled()
            waypointCircleManager?.deleteAll()
            waypointLabelManager?.deleteAll()
        }
        recenter.setOnClickListener {
            navigationCamera.requestNavigationCameraToFollowing()
            routeOverview.showTextAndExtend(BUTTON_ANIMATION_DURATION)
        }
        routeOverview.setOnClickListener {
            navigationCamera.requestNavigationCameraToOverview()
            recenter.showTextAndExtend(BUTTON_ANIMATION_DURATION)
        }
        soundButton.setOnClickListener {
            // mute/unmute voice instructions
            isVoiceInstructionsMuted = !isVoiceInstructionsMuted
        }

        // set initial sounds button state
        soundButton.unmute()
        mapboxNavigation.let { nav ->
            nav.registerRoutesObserver(routesObserver)
            nav.registerLocationObserver(locationObserver)
            nav.registerVoiceInstructionsObserver(voiceInstructionsObserver)
            nav.registerRouteProgressObserver(routeProgressObserver)
            replayProgressObserver = ReplayProgressObserver(nav.mapboxReplayer)
            nav.registerRouteProgressObserver(replayProgressObserver)

            // Start the trip session to being receiving location updates in free drive
            // and later when a route is set also receiving route progress updates.
            // In case of `startReplayTripSession`,
            // location events are emitted by the `MapboxReplayer`

            if (isSimulate) {
                nav.startReplayTripSession(true)
            } else {
                nav.startTripSession(true)
            }

            initNavigation()
        }
    }

    var iconLocation: Int = -1
        set(value) {
            field = value
        }

    fun initNavigation() {
        val topIconId =
                context.resources.getIdentifier(
                        "mapbox_navigation_puck_icon",
                        "drawable",
                        context.packageName
                )

        mapView.location.apply {
            setLocationProvider(navigationLocationProvider)
            if (iconLocation > 0) {
                this.locationPuck =
                        LocationPuck2D(bearingImage = ImageHolder.Companion.from(iconLocation))
            } else {
                this.locationPuck =
                        LocationPuck2D(
                                bearingImage =
                                        ImageHolder.Companion.from(
                                                com.mapbox
                                                        .navigation
                                                        .ui
                                                        .components
                                                        .R
                                                        .drawable
                                                        .mapbox_navigation_puck_icon
                                        )
                        )
            }
            puckBearingEnabled = true
            enabled = true
        }

        replayOriginLocation()
    }

    private fun replayOriginLocation() {
        with(mapboxNavigation.mapboxReplayer) {
            play()
            pushEvents(
                    listOf(
                            ReplayRouteMapper.mapToUpdateLocation(
                                    Date().time.toDouble(),
                                    Point.fromLngLat(waypoints[0].longitude, waypoints[0].latitude)
                            )
                    )
            )
            playFirstLocation()
        }
    }

    data class WaypointForMapboxLib(
            val latitude: Double,
            val longitude: Double,
            val name: String? = null,
            // Bearing opcional (grados 0–360)
            val bearing: Double? = 90.0,

            // Tolerancia del bearing (Mapbox exige ambos)
            val bearingTolerance: Double = 45.0,
            val color: Int? = null,
            val fillColor: Int? = null, // fondo
            val strokeColor: Int? = null, // borde
            val radius: Double = 10.0
    )

    var waypoints: List<WaypointForMapboxLib> = emptyList()
        set(value) {
            require(value.size >= 2) { "Se requieren al menos 2 waypoints" }
            field = value
        }

    var language: String = "es"
        set(value) {
            field = value
        }

    var steps: Boolean = true
        set(value) {
            field = value
        }

    var maxHeight: Double? = null
        set(value) {
            field = value
        }

    var maxWeight: Double? = null
        set(value) {
            field = value
        }

    var maxWidth: Double? = null
        set(value) {
            field = value
        }

    var profile: String = PROFILE_DRIVING
        set(value) {
            Log.d(TAG, "Profile set to: $value")   
            field = value
        }

    var alternatives: Boolean = false
        set(value) {
            field = value
        }
    // polyline6 | polyline
    var geometries: String = DirectionsCriteria.GEOMETRY_POLYLINE6
        set(value) {
            field = value
        }

    // full | simplified | none
    var overview: String = "full"
        set(value) {
            field = value
        }

    var userName: String? = null
        set(value) {
            field = value
        }
    var voiceInstructions: Boolean? = null
        set(value) {
            field = value
        }

    var suppressVoiceInstructionLocalNames: Boolean? = null
        set(value) {
            field = value
        }

    var roundaboutExits: Boolean? = null
        set(value) {
            field = value
        }

    var paymentMethodsList: List<String> = emptyList()
        set(value) {
            field = value
        }

    var enableRefresh: Boolean? = null
        set(value) {
            field = value
        }

    var departAt: String? = null
        set(value) {
            field = value
        }

    var continueStraight: Boolean? = null
        set(value) {
            field = value
        }

    var bannerInstructions: Boolean? = null
        set(value) {
            field = value
        }

    var arriveBy: String? = null
        set(value) {
            field = value
        }

    var voiceUnits: String = DirectionsCriteria.METRIC
        set(value) {
            field = value
        }

    var baseUrl: String? = null
        set(value) {
            field = value
        }

    fun findRoute(point: Point?) {
        val originLocation = navigationLocationProvider.lastLocation ?: return

        val routeOptionsBuilder =
                RouteOptions.builder()
                        .applyDefaultNavigationOptions()
                        .applyLanguageAndVoiceUnitOptions(context)

        //val hasAnyBearing = waypoints.any { it.bearing != null }
        // if (hasAnyBearing) {
        //     routeOptionsBuilder.bearingsList(
        //             waypoints.map { wp ->
        //                 wp.bearing?.let {
        //                     Bearing.builder().angle(it).degrees(wp.bearingTolerance).build()
        //                 }
        //             }
        //     )
        // }

        val allWaypointsHaveBearing = waypoints.all { it.bearing != null && it.bearingTolerance != null }

        if (allWaypointsHaveBearing) {
            val bearingList =
                    waypoints.map { wp ->
                        Bearing.builder().angle(wp.bearing!!).degrees(wp.bearingTolerance!!).build()
                    }

            routeOptionsBuilder.bearingsList(bearingList)
        } // else → NO enviar bearingsList



        val waypointIndices =
                if (waypoints.size >= 2) {
                    listOf(0, waypoints.lastIndex)
                } else {
                    waypoints.indices.toList() // Fallback por seguridad si solo hay 1 punto
                }

        val filteredNames = waypointIndices.map { index -> waypoints[index].name ?: "" }
        val waypointNames =
                waypoints.map { wp ->
                    wp.name ?: "" // Si es null, mandamos vacío para cumplir el requisito de tamaño
                }

        val coordinates = waypoints.map { Point.fromLngLat(it.longitude, it.latitude) }

        routeOptionsBuilder
                .coordinatesList(coordinates)
                .waypointIndicesList(waypointIndices)
                .waypointNamesList(filteredNames)

        routeOptionsBuilder.language(language)
        routeOptionsBuilder.steps(steps)
        routeOptionsBuilder.profile(profile)
        if (maxHeight != null) {
            routeOptionsBuilder.maxHeight(maxHeight)
        }

        if (maxWidth != null) {
            routeOptionsBuilder.maxWidth(maxWidth)
        }

        if (maxWeight != null) {
            routeOptionsBuilder.maxWeight(maxWeight)
        }

        routeOptionsBuilder.alternatives(alternatives)
        routeOptionsBuilder.geometries(geometries)

        var overviewL: String = "full"
        routeOptionsBuilder.enableRefresh(true)
        if (overview == "simplified") {
            overviewL = "simplified"
            routeOptionsBuilder.enableRefresh(false)
        } else if (overview == "false") {
            routeOptionsBuilder.enableRefresh(false)
            overviewL = "false"
        }
        routeOptionsBuilder.overview(overviewL)
        if (userName != null) {
            routeOptionsBuilder.user(userName!!)
        }

        if (voiceInstructions != null) {
            routeOptionsBuilder.voiceInstructions(voiceInstructions)
        }

        if (suppressVoiceInstructionLocalNames != null) {
            routeOptionsBuilder.suppressVoiceInstructionLocalNames(
                    suppressVoiceInstructionLocalNames
            )
        }

        if (roundaboutExits != null) {
            if (roundaboutExits == true) {
                routeOptionsBuilder.steps(true)
            }
            routeOptionsBuilder.roundaboutExits(roundaboutExits)
        }

        if (paymentMethodsList.isNotEmpty()) {
            routeOptionsBuilder.paymentMethodsList(paymentMethodsList.map { it.toString() })
        }

        if (enableRefresh != null) {
            routeOptionsBuilder.enableRefresh(enableRefresh)
        }

        if (departAt != null) {
            routeOptionsBuilder.departAt(departAt)
        }

        if (continueStraight != null) {
            routeOptionsBuilder.continueStraight(continueStraight)
        }

        if (bannerInstructions != null) {
            routeOptionsBuilder.bannerInstructions(bannerInstructions)
            this.maneuverView.visibility = View.INVISIBLE
        }

        if (arriveBy != null) {
            routeOptionsBuilder.arriveBy(arriveBy)
        }

        routeOptionsBuilder.voiceUnits(voiceUnits)

        if (baseUrl != null) {
            routeOptionsBuilder.baseUrl(baseUrl!!)
        }

        routeCallback?.onRouteRequestStarted()
        requestId =
                mapboxNavigation.requestRoutes(
                        routeOptionsBuilder.build(),
                        object : NavigationRouterCallback {

                            override fun onCanceled(
                                    routeOptions: RouteOptions,
                                    routerOrigin: String
                            ) {
                                Log.e(TAG, "onCanceled")
                                routeCallback?.onRouteCanceled()
                            }

                            override fun onFailure(
                                    reasons: List<RouterFailure>,
                                    routeOptions: RouteOptions
                            ) {
                                // Log.e(TAG, "onFailure: ${reasons.firstOrNull()?.message}")
                                routeCallback?.onRouteFailed(
                                        reasons.firstOrNull()?.message ?: "Unknown routing error"
                                )
                            }

                            override fun onRoutesReady(
                                    routes: List<NavigationRoute>,
                                    routerOrigin: String
                            ) {
                                setRouteAndStartNavigation(routes)
                                renderWaypoints()
                                routeCallback?.onRoutesReady(routes)
                            }
                        }
                )
    }
    private var waypointCircleManager: CircleAnnotationManager? = null
    private var waypointLabelManager: PointAnnotationManager? = null

    private fun renderWaypoints() {
        val annotationApi = mapView.annotations

        // --- Circle manager (background / stroke) ---
        if (waypointCircleManager == null) {
            waypointCircleManager = annotationApi.createCircleAnnotationManager()
        } else {
            waypointCircleManager?.deleteAll()
        }

        // --- Label manager (text) ---
        if (waypointLabelManager == null) {
            waypointLabelManager = annotationApi.createPointAnnotationManager()
        } else {
            waypointLabelManager?.deleteAll()
        }

        waypoints.forEach { wp ->
            val point = Point.fromLngLat(wp.longitude, wp.latitude)

            // ---------- CIRCLE ----------
            val circleOptions =
                    CircleAnnotationOptions().withPoint(point).withCircleRadius(wp.radius)

            wp.fillColor?.let { circleOptions.withCircleColor(it) }

            wp.strokeColor?.let {
                circleOptions.withCircleStrokeColor(it).withCircleStrokeWidth(2.0)
            }

            waypointCircleManager?.create(circleOptions)

            // ---------- LABEL ----------
            wp.name?.takeIf { it.isNotBlank() }?.let { name ->
                val labelOptions =
                        PointAnnotationOptions()
                                .withPoint(point)
                                .withTextField(name)
                                .withTextSize(14.0)
                                .withTextOffset(listOf(0.0, -1.5))

                wp.color?.let { color -> labelOptions.withTextColor(color) }

                waypointLabelManager?.create(labelOptions)
            }
        }
    }

    private fun setRouteAndStartNavigation(routes: List<NavigationRoute>) {
        // set routes, where the first route in the list is the primary route that
        // will be used for active guidance
        mapboxNavigation.setNavigationRoutes(routes)

        // show UI elements
        soundButton.visibility = View.VISIBLE
        routeOverview.visibility = View.VISIBLE
        // tripProgressCard.visibility = View.VISIBLE

        // move the camera to overview when new route is available
        navigationCamera.requestNavigationCameraToOverview()

        // start simulation
        startSimulation(routes.first().directionsRoute)
    }

    private fun clearRouteAndStopNavigation() {
        // clear
        mapboxNavigation.setNavigationRoutes(listOf())

        // stop simulation
        stopSimulation()

        // hide UI elements
        soundButton.visibility = View.INVISIBLE
        maneuverView.visibility = View.INVISIBLE
        routeOverview.visibility = View.INVISIBLE
        // tripProgressCard.visibility = View.INVISIBLE
    }

    private fun startSimulation(route: DirectionsRoute) {
        mapboxNavigation.mapboxReplayer.stop()
        mapboxNavigation.mapboxReplayer.clearEvents()
        val replayData = replayRouteMapper.mapDirectionsRouteGeometry(route)
        mapboxNavigation.mapboxReplayer.pushEvents(replayData)
        mapboxNavigation.mapboxReplayer.seekTo(replayData[0])
        mapboxNavigation.mapboxReplayer.play()
    }

    private fun stopSimulation() {
        mapboxNavigation.mapboxReplayer.stop()
        mapboxNavigation.mapboxReplayer.clearEvents()
    }
    private fun formatKm(distanceMeters: Int): String {
        val km = distanceMeters / 1000
        val rounded = Math.round((km * 10).toDouble()) / 10
        return if (rounded.toInt().toDouble().toLong() == rounded) {
            "${rounded.toInt()} km"
        } else {
            "$rounded km"
        }
    }

    private fun formatTimeRemaining(totalSeconds: Double): String {
        if (totalSeconds.isNaN() || totalSeconds <= 0) {
            return "0 min"
        }

        val seconds = totalSeconds.toInt() // Math.floor equivalente para positivos
        val minutes = seconds / 60
        val hours = minutes / 60

        if (hours > 0) {
            val remainingMinutes = minutes % 60
            return if (remainingMinutes > 0) {
                "${hours} h ${remainingMinutes} min"
            } else {
                "${hours} h"
            }
        }

        if (minutes > 0) {
            return "${minutes} min"
        }

        return "${seconds} s"
    }

    private fun formatEstimatedTimeOfArrival(etaMillis: Long?): String {
        if (etaMillis == null || etaMillis <= 0) {
            return "--:--"
        }

        val date = Date(etaMillis)
        val calendar = Calendar.getInstance().apply { time = date }

        val hours = calendar.get(Calendar.HOUR_OF_DAY)
        val minutes = calendar.get(Calendar.MINUTE)

        val hh = if (hours < 10) "0$hours" else "$hours"
        val mm = if (minutes < 10) "0$minutes" else "$minutes"

        return "$hh:$mm"
    }

    val routesObserver = RoutesObserver { routeUpdateResult ->
        if (routeUpdateResult.navigationRoutes.isNotEmpty()) {
            // generate route geometries asynchronously and render them
            routeLineApi.setNavigationRoutes(routeUpdateResult.navigationRoutes) { value ->
                mapView.mapboxMap.style?.apply { routeLineView.renderRouteDrawData(this, value) }
            }

            // update the camera position to account for the new route
            viewportDataSource.onRouteChanged(routeUpdateResult.navigationRoutes.first())
            viewportDataSource.evaluate()
        } else {
            // remove the route line and route arrow from the map
            val style = mapView.mapboxMap.style
            if (style != null) {
                routeLineApi.clearRouteLine { value ->
                    routeLineView.renderClearRouteLineValue(style, value)
                }
                routeArrowView.render(style, routeArrowApi.clearArrows())
            }

            // remove the route reference from camera position evaluations
            viewportDataSource.clearRouteData()
            viewportDataSource.evaluate()
        }
    }
    lateinit var mapboxNavigation: MapboxNavigation

    fun createMapView(): MapView {
        mapView = MapView(context)
        mapView.id = View.generateViewId()

        val layoutParams = ConstraintLayout.LayoutParams(0, 0)

        layoutParams.bottomToBottom = ConstraintLayout.LayoutParams.PARENT_ID
        layoutParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID
        layoutParams.startToStart = ConstraintLayout.LayoutParams.PARENT_ID
        layoutParams.topToTop = ConstraintLayout.LayoutParams.PARENT_ID
        mapView.layoutParams = layoutParams
        return mapView
    }

    fun createTripProgressCard(): CardView {
        val card = CardView(context)
        card.id = View.generateViewId()
        card.visibility = View.VISIBLE
        card.radius = dpToPx(16).toFloat()
        card.elevation = dpToPx(8).toFloat()
        card.useCompatPadding = true

        val cardParams =
                ConstraintLayout.LayoutParams(0, ConstraintLayout.LayoutParams.WRAP_CONTENT)
        cardParams.startToStart = ConstraintLayout.LayoutParams.PARENT_ID
        cardParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID
        cardParams.bottomToBottom = ConstraintLayout.LayoutParams.PARENT_ID
        cardParams.setMargins(dpToPx(16), dpToPx(16), dpToPx(16), dpToPx(24))
        card.layoutParams = cardParams

        // ROOT CONTAINER
        val root = ConstraintLayout(context)
        root.layoutParams =
                ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT)
                )
        root.setPadding(dpToPx(16), dpToPx(12), dpToPx(16), dpToPx(5))

        // TEXT CONTAINER (CENTERED)
        val textContainer = LinearLayout(context)
        textContainer.id = View.generateViewId()
        textContainer.orientation = LinearLayout.VERTICAL
        textContainer.gravity = Gravity.CENTER_HORIZONTAL

        val textParams =
                ConstraintLayout.LayoutParams(
                        ConstraintLayout.LayoutParams.WRAP_CONTENT,
                        ConstraintLayout.LayoutParams.WRAP_CONTENT
                )
        textParams.startToStart = ConstraintLayout.LayoutParams.PARENT_ID
        textParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID
        textParams.topToTop = ConstraintLayout.LayoutParams.PARENT_ID
        textParams.bottomToBottom = ConstraintLayout.LayoutParams.PARENT_ID
        textContainer.layoutParams = textParams

        // DISTANCE
        distanceRemaining = TextView(context)
        distanceRemaining.text = "-- km"
        distanceRemaining.textSize = 20f
        distanceRemaining.typeface = Typeface.DEFAULT_BOLD
        distanceRemaining.setTextColor(Color.BLACK)
        distanceRemaining.gravity = Gravity.CENTER_HORIZONTAL

        // TIME
        timeRemaining = TextView(context)
        timeRemaining.text = "-- min"
        timeRemaining.textSize = 14f
        timeRemaining.setTextColor(("#B0B0B0").toColorInt())

        // ETA
        eta = TextView(context)
        this.eta.text = "--:--"
        this.eta.textSize = 14f
        this.eta.setTextColor("#B0B0B0".toColorInt())

        textContainer.addView(this.distanceRemaining)
        textContainer.addView(this.timeRemaining)
        textContainer.addView(this.eta)

        // CANCEL IMAGE
        val cancelImage = ImageView(context)
        cancelImage.id = View.generateViewId()
        cancelImage.setImageResource(
                context.resources.getIdentifier(
                        "ic_delete", // drawable name
                        "drawable",
                        "android"
                )
        )
        cancelImage.setPadding(
                dpToPx(8),
                dpToPx(8),
                dpToPx(8),
                dpToPx(8),
        )
        cancelImage.isClickable = true
        cancelImage.isFocusable = true

        val cancelParams = ConstraintLayout.LayoutParams(dpToPx(32), dpToPx(32))
        cancelParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID
        cancelParams.topToTop = ConstraintLayout.LayoutParams.PARENT_ID
        cancelParams.bottomToBottom = ConstraintLayout.LayoutParams.PARENT_ID
        cancelImage.layoutParams = cancelParams
        stop = cancelImage
        // ADD VIEWS
        root.addView(textContainer)
        root.addView(cancelImage)
        card.addView(root)

        return card
    }

    fun createTripprogressView(): MapboxTripProgressView {
        tripProgressView = MapboxTripProgressView(context)
        tripProgressView.id = View.generateViewId()
        val progressParams =
                ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                )
        tripProgressView.visibility = View.VISIBLE
        tripProgressView.layoutParams = progressParams

        return tripProgressView
    }

    fun createManeuverView(): MapboxManeuverView {
        maneuverView = MapboxManeuverView(context)
        maneuverView.id = View.generateViewId()
        maneuverView.visibility = View.VISIBLE
        val maneuverParams: ConstraintLayout.LayoutParams =
                ConstraintLayout.LayoutParams(0, ConstraintLayout.LayoutParams.WRAP_CONTENT)

        maneuverParams.topToTop = ConstraintLayout.LayoutParams.PARENT_ID
        maneuverParams.startToStart = ConstraintLayout.LayoutParams.PARENT_ID
        maneuverParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID
        val marginPx = dpToPx(4)
        maneuverParams.setMargins(marginPx, marginPx, marginPx, marginPx)

        maneuverView.layoutParams = maneuverParams

        return maneuverView
    }

    fun createButtonSoundButton(): MapboxSoundButton {
        soundButton =
                MapboxSoundButton(
                        context,
                        null,
                        com.mapbox.navigation.ui.components.R.style.MapboxStyleSound
                )
        soundButton.id = View.generateViewId()
        soundButton.visibility = View.VISIBLE
        val soundParams: ConstraintLayout.LayoutParams =
                ConstraintLayout.LayoutParams(
                        ConstraintLayout.LayoutParams.WRAP_CONTENT,
                        ConstraintLayout.LayoutParams.WRAP_CONTENT
                )

        soundParams.topToBottom = maneuverView.id
        soundParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID

        soundParams.topMargin = dpToPx(8)
        soundParams.marginEnd = dpToPx(16)

        soundButton.layoutParams = soundParams
        return soundButton
    }

    fun createRouteOverviewButtonView(): MapboxRouteOverviewButton {
        routeOverview =
                MapboxRouteOverviewButton(
                        context,
                        null,
                        com.mapbox.navigation.ui.components.R.style.MapboxStyleRouteOverview
                )
        routeOverview.id = android.view.View.generateViewId()

        routeOverview.visibility = View.VISIBLE
        val overviewParams =
                ConstraintLayout.LayoutParams(
                        ConstraintLayout.LayoutParams.WRAP_CONTENT,
                        ConstraintLayout.LayoutParams.WRAP_CONTENT
                )

        overviewParams.topToBottom = soundButton.id
        overviewParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID

        overviewParams.topMargin = dpToPx(8)
        overviewParams.marginEnd = dpToPx(16)

        // 6. Aplicar parámetros y añadir al contenedor principal
        routeOverview.layoutParams = overviewParams
        return routeOverview
    }

    fun createRecenterButtonView(): MapboxRecenterButton {
        recenter =
                MapboxRecenterButton(
                        context,
                        null,
                        com.mapbox.navigation.ui.components.R.style.MapboxStyleRecenter
                )
        recenter.id = View.generateViewId()
        recenter.visibility = View.VISIBLE
        val recenterParams =
                ConstraintLayout.LayoutParams(
                        ConstraintLayout.LayoutParams.WRAP_CONTENT,
                        ConstraintLayout.LayoutParams.WRAP_CONTENT
                )

        recenterParams.topToBottom = routeOverview.id
        recenterParams.endToEnd = ConstraintLayout.LayoutParams.PARENT_ID

        recenterParams.topMargin = dpToPx(8)
        recenterParams.marginEnd = dpToPx(16)
        recenter.layoutParams = recenterParams

        return recenter
    }

    private fun dpToPx(dp: Int): Int {
        val density = context.resources.displayMetrics.density
        return Math.round(dp * density)
    }

    fun onStart() {}

    fun onStop() {}

    fun onDestroy() {

        mapboxNavigation.unregisterRoutesObserver(routesObserver)
        mapboxNavigation.unregisterLocationObserver(locationObserver)
        mapboxNavigation.unregisterRouteProgressObserver(routeProgressObserver)
        mapboxNavigation.unregisterRouteProgressObserver(replayProgressObserver)
        mapboxNavigation.unregisterVoiceInstructionsObserver(voiceInstructionsObserver)
        mapboxNavigation.mapboxReplayer.finish()
        maneuverApi.cancel()
        routeLineApi.cancel()
        routeLineView.cancel()
        speechApi.cancel()
        voiceInstructionsPlayer.shutdown()
    }

    // Implementación de DefaultLifecycleObserver para integración fácil con Android nativo
    override fun onStart(owner: LifecycleOwner) {
        super.onStart(owner)
        onStart()
    }
    override fun onStop(owner: LifecycleOwner) {
        super.onStop(owner)
        onStop()
    }
    override fun onDestroy(owner: LifecycleOwner) {
        super.onDestroy(owner)
        onDestroy()
    }
    override fun onPause(owner: LifecycleOwner) {
        super.onPause(owner)
    }

    override fun onResume(owner: LifecycleOwner) {
        super.onResume(owner)
    }
}
