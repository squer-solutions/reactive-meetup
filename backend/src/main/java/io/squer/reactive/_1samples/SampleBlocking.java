package io.squer.reactive._1samples;

import java.util.List;

public class SampleBlocking {

    private record UserSubscription(String subscriptionId, List<String> entitlements) {}
    private record UserData(String userId, String name, String email) {}
    private record User(UserData userData, UserSubscription subscription) {}

    private UserSubscription getUserSubscription(String userId) {
        // call to external service
        return new UserSubscription("subId", List.of("ent1", "ent2"));
    }

    private UserData getUserData(String userId) {
        // call to external service
        return new UserData(userId, "name", "email");
    }

    public User sample(String userId) {

        UserData userData = getUserData(userId); // blocks thread
        UserSubscription subscription
            = getUserSubscription(userId); // blocks thread

        return new User(userData, subscription);
    }

}
