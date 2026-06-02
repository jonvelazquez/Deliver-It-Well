const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

chai.use(chaiHttp);
const expect = chai.expect;

server.listen(4444);

describe('server/app.js', function () {
  this.timeout(5000);
  beforeEach((done) => {

    done();
  });

  afterEach((done) => {
    done();
  })

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('page shows Deliver It Well', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(JSON.stringify(res.text)).to.contain('Deliver It Well');
        done();
      });
  });
  it('page shows the custom <h2> text', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(JSON.stringify(res.text)).to.contain('Jonathan Was Here');
        done();
      });
  });
});
