var topics = ["Output", "Statements", "Variables", "XX"];
var contents = [
    "../views/syntax-output.html",
    "", 
    "", 
    ""
];

document.addEventListener("DOMContentLoaded", function() {
    fill_topics(topics.length);
    fill_topic_content(contents.length);
});

function fill_topics(nb_topics) {
    if (nb_topics === topics.length) {
        for (let i = 0; i < topics.length; i++) {
            const topic_id = 'topic_' + (i + 1);
            const topic_title = topics[i];
            replace_text(topic_id, topic_title);
        }
    }
}

function fill_topic_content(nb_contents) {
    if (nb_contents === contents.length) {
        for (let i = 0; i < contents.length; i++) {
            const content_id = 'content_' + (i + 1);
            const content_url = contents[i];
            if (content_url) {
                create_object(content_id, content_url);
            }
        }
    }
}

function replace_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function replace_html(id, html) {
    document.getElementById(id).innerHTML = html;
}

function create_object(id, url) {
    const objectTag = document.createElement('object');
    objectTag.type = 'text/html';
    objectTag.data = url;
    objectTag.width = '100%';
    objectTag.height = '400px';

    document.getElementById(id).appendChild(objectTag);
}
