register:
	@curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "leedonggyu", "email": "zkfmapf999@gmail.com", "password" : "12345678"}'

login:
	@curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "zkfmapf999@gmail.com", "password": "12345678"}'

id:	
	@curl -X GET http://localhost:3000/users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InprZm1hcGY5OTlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInRva2VuIjpudWxsLCJpYXQiOjE2NjA5ODY3OTAsImV4cCI6MTY2MTA3MzE5MCwiYXVkIjoiZG9uZ2d5dS5jb20iLCJpc3MiOiJkb25nZ3l1LmNvbSJ9.t3vzhMc6ejX1hLbgFLesKnULPf1dGRHT7gj1_GZZ5Hk "

test-curl:
	@sh bash_profile
