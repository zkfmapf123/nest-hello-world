register:
	@curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Dexter", "email": "dexter.haan@gmail.com"}'

email-verify:
	@curl -X POST http://localhost:3000/users/email-verify\?signupVerifyToken\=test_token

login:
	@curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "dexter.haan@gmail.com", "password": "PASSWORD"}'

id:	
	@curl -X GET http://localhost:3000/users/user-i

test-curl:
	@sh bash_profile
