module.exports.config = {
    name: "sendmsg",
    version: "0.0.2",
    hasPermssion: 2,
    credits: "Dũng UwU fix by HTHB",
    description: "sendmsg",
    commandCategory: "general",
    usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
    if (args[0]=='user') {
        return api.sendMessage(`Vào lúc: ${gio}\n"Thông báo từ AdminBot Nguyễn Mạnh Tuấn\nNội dung: ` + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến thành viên ' + args[1] + ' thành công', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage(`Vào lúc: ${gio}\n"Thông báo từ AdminBot Nguyễn Mạnh Tuấn\nNội dung: ` + msg, args[1]).then(
            api.sendMessage('Đã gửi tin nhắn đến nhóm ' + args[1] + ' thành công', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }