public class MedalRepository {

    package com.example.olympics;

    import org.springframework.data.jpa.repository.JpaRepository;

public interface MedalRepository extends JpaRepository<Medal, Long> {
}

    
}
