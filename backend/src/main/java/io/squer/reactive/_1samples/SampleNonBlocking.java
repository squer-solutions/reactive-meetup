package io.squer.reactive._1samples;

import reactor.core.publisher.Mono;

import java.util.List;

public class SampleNonBlocking {

    private record UserSubscription(String subscriptionId, List<String> entitlements) {}
    private record UserData(String userId, String name, String email) {}
    public record User(UserData userData, UserSubscription subscription) {}

    private Mono<UserSubscription> getUserSubscription(String userId) {
        return Mono.just(new UserSubscription("subId", List.of("ent1", "ent2")));
    }

    private Mono<UserData> getUserData(String userId) {
        return Mono.just(new UserData(userId, "name", "email"));
    }

    public Mono<User> sample(String userId) {
        return Mono.zip(
            getUserData(userId),
            getUserSubscription(userId),
            User::new
        );
    }

}
