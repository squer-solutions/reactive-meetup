package io.squer.reactive.util;

import java.util.List;
import java.util.Random;

public class LogStatementProvider {

    private static List<String> logEntries = List.of(
        "User 'JohnDoe' logged in successfully.",
        "Database connection established at 10:42 AM.",
        "Error: NullPointerException in method 'processData'.",
        "File 'config.json' loaded with 12 errors.",
        "Warning: Deprecated API method 'getOldData' called.",
        "System shutdown initiated at 5:00 PM.",
        "User 'Alice' failed to authenticate with incorrect password.",
        "Network request to 'https://api.example.com' succeeded.",
        "Memory usage exceeded threshold: 85%.",
        "Scheduled task 'backupData' completed in 45 minutes.",
        "Security alert: Multiple failed login attempts detected.",
        "Cache cleared for 'userSession'.",
        "Transaction ID 859302 failed due to insufficient funds.",
        "File 'report.csv' saved successfully.",
        "User 'Bob' updated their profile picture.",
        "Error: SQLSyntaxErrorException in database query.",
        "API response time exceeded 2 seconds.",
        "Backup process started at 12:00 AM.",
        "User 'Charlie' logged out.",
        "Error: ArrayIndexOutOfBoundsException during iteration.",
        "System performance improved by 15% after update.",
        "User 'Eve' changed their email address.",
        "Failed to connect to external service: 'paymentGateway'.",
        "Service 'AuthService' restarted successfully.",
        "File 'data.zip' corrupted during transfer.",
        "System backup successfully completed.",
        "Scheduled maintenance started.",
        "User 'David' granted admin privileges.",
        "System initialized with default configuration.",
        "Network latency spikes detected on server 3.",
        "Timeout occurred while waiting for response from 'emailService'.",
        "File 'update.jar' updated to version 2.1.",
        "User 'Frank' created a new support ticket.",
        "Memory leak detected in module 'paymentProcessing'.",
        "Server 'DB01' responded with HTTP status 503.",
        "Data synchronization completed with 10 errors.",
        "Unknown error occurred during data import.",
        "Alert: Disk space on '/var/log' is below 10GB.",
        "Service 'FileUpload' successfully restarted.",
        "User 'Grace' uploaded 5 new files.",
        "Database query executed in 0.45 seconds.",
        "Error: TimeoutException during remote API call.",
        "Server 'WebApp' upgraded to version 3.0.",
        "User 'Hannah' deleted their account.",
        "File 'user_data.csv' exported successfully.",
        "User 'Ivy' requested a password reset.",
        "Warning: High CPU usage on server 'AppServer1'.",
        "Service 'EmailSender' failed to send message to 'user@example.com'.",
        "User 'Jake' updated their security settings.",
        "Application crashed unexpectedly with error code 500.",
        "Audit log: User 'Laura' accessed sensitive data.",
        "File 'logfile.log' rotated successfully.",
        "Update completed with 3 warnings.",
        "Backup task failed due to missing directory.",
        "Service 'DataSync' completed with 5 retries.",
        "User 'Mark' joined the team.",
        "Database 'usersDB' backup successfully restored.",
        "User 'Bob' has tragically died.",
        "Like and Subscribe."
    );

    public static String getRandomLogStatement() {
        return logEntries.get(new Random().nextInt(logEntries.size()));
    }

}
