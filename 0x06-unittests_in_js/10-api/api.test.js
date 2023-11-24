const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
	it('should return status code 200', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
});

describe('/login Endpoint', () => {
  it('should return status code 200 and welcome message', (done) => {
    const userData = {
      userName: 'JohnDoe'
    };

    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: userData
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });

  // Additional test cases for the /login endpoint

  // ...
});

describe('/available_payments Endpoint', () => {
  it('should return status code 200 and payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done();
    });
  });

  // Additional test cases for the /available_payments endpoint

  // ...
});
