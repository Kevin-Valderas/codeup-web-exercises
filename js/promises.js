const username= 'TheLivingSkrypt';
const url = `https://api.github.com/users/${username}/events`;
const options = {headers: {
    authorization: `token ${GITHUB_TOKEN}`,
        'Content-type': `application/json`
    }
};

function getLastPush() {
    return fetch(url,options)
        .then(response => response.json())
        .then(events => {
            const mostRecentPush = events.find(({ type }) => type === 'PushEvent')
            return new Date(mostRecentPush.created_at).toDateString()
        })
}

getLastPush(username)
    .then(console.log)
    .catch(console.log);