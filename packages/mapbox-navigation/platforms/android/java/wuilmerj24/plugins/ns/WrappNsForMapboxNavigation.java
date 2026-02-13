package wuilmerj24.plugins.ns;

import android.content.Context;

import java.util.ArrayList;
import java.util.List;

public class WrappNsForMapboxNavigation {
    private final List<MapboxNavViewForFrameworks.WaypointForMapboxLib> waypoints = new ArrayList<>();

    public void addWaypoint(
            double latitude,
            double longitude,
            String name,
            Double bearing,
            double bearingTolerance,
            Integer color,
            Integer fillColor,
            Integer strokeColor,
            double radius) {
        MapboxNavViewForFrameworks.WaypointForMapboxLib wp = new MapboxNavViewForFrameworks.WaypointForMapboxLib(
                latitude,
                longitude,
                name,
                bearing,
                bearingTolerance,
                color,
                fillColor,
                strokeColor,
                radius);

        waypoints.add(wp);
    }

    /**
     * Limpia la lista
     */
    public void clear() {
        waypoints.clear();
    }

    /**
     * Uso interno (NO llamar desde NS)
     */
    List<MapboxNavViewForFrameworks.WaypointForMapboxLib> build() {
        return waypoints;
    }

    /**
     * Aplica los waypoints a la vista Mapbox
     */
    public void applyTo(MapboxNavViewForFrameworks mapboxView) {
        mapboxView.setWaypoints(waypoints);
    }
}
