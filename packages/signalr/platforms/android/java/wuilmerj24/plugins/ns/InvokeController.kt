package wuilmerj24.plugins.ns

import com.google.gson.Gson
import com.microsoft.signalr.HubConnection
import android.util.Log


class InvokeController {
    companion object {
        private const val TAG = "InvokeController"
    }

    private val gson = Gson()

    fun invoke(
        hubConnection: HubConnection,
        method: String,
        payload: Any
    ){

        val json = gson.toJson(payload);
        Log.d(TAG, "invoke() llamado -> method=$method, payload=$json")
        // Crea una lista de mapas (cada mapa es un objeto {"":""})
        val messages =
                listOf(
                        mapOf("sender" to "wuilmerj24", "message" to "Hola"),
                        mapOf("sender" to "user2", "message" to "Hi")
                )

        // Si necesitas que sea mutable (para agregar más después):
        val mutableMessages = mutableListOf<Map<String, String>>()

        mutableMessages.add(mapOf("sender" to "wuilmerj24", "message" to "Hola"))

        hubConnection.invoke(method,messages);
    }
}