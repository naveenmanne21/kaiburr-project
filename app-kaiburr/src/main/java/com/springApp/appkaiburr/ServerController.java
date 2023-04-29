package com.springApp.appkaiburr;


import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ServerController {
    @Autowired
    private ServerRepository serverRepository;

    // GET servers
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/servers")
    @ApiOperation(value = "Get a list of all the Data")
    public ResponseEntity<List<com.springApp.appkaiburr.Server>> getAllServers() {
        List<com.springApp.appkaiburr.Server> books = serverRepository.findAll();
        return ResponseEntity.ok(books);
    }

    // PUT a server

    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping("/servers")
    @PutMapping("/servers")
    public ResponseEntity<com.springApp.appkaiburr.Server> createServer(@RequestBody com.springApp.appkaiburr.Server server) {
        com.springApp.appkaiburr.Server createdServer = serverRepository.save(server);
        return new ResponseEntity<>(createdServer, HttpStatus.CREATED);
    }

    // DELETE a server

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/servers/{id}")
    public ResponseEntity<HttpStatus> deleteServer(@PathVariable String id) {
        serverRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
