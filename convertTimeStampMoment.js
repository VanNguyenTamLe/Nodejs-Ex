// đưa ngày giờ hiện tại ở múi giờ +7 về timestamp
const now = moment().tz('Asia/Bangkok').format('X');

// đưa timestamp về định dạng ngày giờ
const datetime = moment.unix(now).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
