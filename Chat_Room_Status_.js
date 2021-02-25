function chatroomStatus(users) {
    let nb = users.length;
    switch (nb) {
        case 0:
            return "no one online";
        case 1:
            return `${users[0]} online`;
        case 2:
            return `${users[0]} and ${users[1]} online`;
        default:
            return `${users[0]}, ${users[1]} and ${nb - 2} more online`;
    }
}
