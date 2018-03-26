const request = require("supertest");
const expect = require("expect");

const app = require("../server").app;


describe("Server", () => {
	describe("Init", () => {	
		it("should be able to test", () => {
			expect(1).toBe(1);
		});
	});

	describe("POST /api/shorten", () => {	
		it("should shorten a valid URL", (done) => {
			request(app)
				.post("/api/shorten")
				.send({ url: "http://dealtap.ca"})
				.expect(200)
				.expect('Content-Type', /json/)
				.expect((res) => {
					expect(res.body).toBeInstanceOf(Object);
					expect(res.body.url).toBe("http://dealtap.ca");
				})
				.end(done);
		});

		it("should return error on bad URL", (done) => {
			request(app)
				.post("/api/shorten")
				.send({ url: "notAURL"})
				.expect(400)
				.end(done);
		});

		it("should return error on no URL", (done) => {
			request(app)
				.post("/api/shorten")
				.expect(400)
				.end(done);
		});
	});

	describe("GET /u/", () => {	
		it("should return all created URLS", (done) => {
			request(app)
				.get("/u")
				.expect(200)
				.expect('Content-Type', /json/)
				.expect((res) => {
					expect(res.body).toBeInstanceOf(Array);
					expect(res.body[0]).toBeInstanceOf(Object);
					expect(res.body[0]).toHaveProperty('url');
					expect(res.body[0]).toHaveProperty('created');
					expect(res.body[0]).toHaveProperty('count');
				})
				.end(done);
		});
	});

	describe("GET /u/:id/", () => {	
		it("should signal redirect", (done) => {
			request(app)
				.get("/u/126")
				.expect(302)
				.end(done);
		});
	});

	describe("GET /u/:id/details", () => {	
		it("should return details about created URL", (done) => {
			request(app)
				.get("/u/126/details")
				.expect(200)
				.expect('Content-Type', /json/)
				.expect((res) => {
					expect(res.body).toBeInstanceOf(Object);
					expect(res.body).toHaveProperty('url');
					expect(res.body).toHaveProperty('count');
					expect(res.body).toHaveProperty('visitors');
					expect(res.body.visitors).toBeInstanceOf(Array);
				})
				.end(done);
		});
	});
});
