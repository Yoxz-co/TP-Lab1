public class MedalController {
    public static void main(String[] args) {
        

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medals")
public class MedalController {

    @Autowired
    private MedalRepository medalRepository;

    @PostMapping
    public ResponseEntity<?> addMedal(@RequestBody Medal medal) {
        Medal savedMedal = medalRepository.save(medal);
        return ResponseEntity.ok(savedMedal);
    }

    @GetMapping
    public List<Medal> getMedals() {
        return medalRepository.findAll();
    }
}

    }
}
