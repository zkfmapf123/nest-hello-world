register:
	@curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"user_name": "leedonggyu", "user_email": "zkfmapf999@gmail.com", "user_password" : "12345678"}'

email-verify:
	@curl -X POST http://localhost:3000/users/email-verify?signUpVerifyToken=dfnkjasdnflkjashdfkljasd

login:
	@curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"user_email": "zkfmapf999@gmail.com", "user_password": "PASSWORD"}'

id:	
	@curl -X GET http://localhost:3000/users/10

test-curl:
	@sh bash_profile
