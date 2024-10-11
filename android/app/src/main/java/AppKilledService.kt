import android.app.Service
import android.content.Intent
import android.os.IBinder

class AppKilledService : Service() {
    override fun onBind(intent: Intent): IBinder? {
        return null
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        val appKilledDetector = AppKilledDetector(this)
        appKilledDetector.detectAppKilled()
        stopSelf()
        return super.onStartCommand(intent, flags, startId)
    }

    override fun onTaskRemoved(rootIntent: Intent) {
        val appKilledDetector = AppKilledDetector(this)
        appKilledDetector.detectAppKilled()
        super.onTaskRemoved(rootIntent)
    }
}
