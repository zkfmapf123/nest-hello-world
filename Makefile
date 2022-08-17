register:
	@curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "leedonggyu", "email": "zkfmapf999@gmail.com", "password" : "12345678"}'

email-verify:
	@curl -X POST http://localhost:3000/users/email-verify?signUpVerifyToken=dfnkjasdnflkjashdfkljasd

login:
	@curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "zkfmapf999@gmail.com", "password": "PASSWORD"}'

id:	
	@curl -X GET http://localhost:3000/users/10

test-curl:
	@sh bash_profile
