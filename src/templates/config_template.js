const config={
    "server":{
            "api":{
                    "ip":"127.0.0.1",
                    "port":8080
            },
            "install_location":"/etc/VibeEngine-Server"
    },
    "client":{
            "api":{
                    "ip":"0.0.0.0",
                    "port":8081
            },
            "server":{
                    "ip":"127.0.0.1",
                    "port":8080
            },
            "install_location":"/etc/VibeEngine-Client"
    }
}

module.exports = config;