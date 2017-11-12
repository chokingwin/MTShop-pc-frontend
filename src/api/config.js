class Config {
    constructor() {
        this.host = 'http://localhost/mtshop/public/index.php';
        // this.host = 'http://localhost/xingqi2/public/index.php';
        this.prefix = '/api/v1/';
        this.restUrl = this.host + this.prefix;
    }
}
export default new Config()
