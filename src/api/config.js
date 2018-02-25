class Config {
    constructor() {
        this.host = 'http://www.mtshop.app/public/index.php';
        this.prefix = '/api/v1/';
        this.restUrl = this.host + this.prefix;
    }
}
export default new Config()
