import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AppKilledModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AppKilledModule"
    }

    @ReactMethod
    fun startAppKilledService() {
        val intent = Intent(reactApplicationContext, AppKilledService::class.java)
        reactApplicationContext.startService(intent)
    }
}