register:
	@curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "leedonggyu", "email": "zkfmapf999@gmail.com", "password" : "12345678"}'

login:
	@curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "zkfmapf999@gmail.com", "password": "12345678"}'

id:	
	@curl -X GET http://localhost:3000/users/1

test-curl:
	@sh bash_profile
