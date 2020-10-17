// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

class Stage {
    constructor(diff) {
        this.diff = diff;
    }

    prepare() {
        this.hideReplyBox();
        this.updateAndHideComments();
        this.hideCommentBox();
    }

    async play() {
        var interval = 5000;
        this.showCommentBox();
        for(var index=0; index<this.diff.comments.length; index++){
            var comment = this.diff.comments[index];
            var commentBox = document.querySelector("#"+comment.id);
            commentBox.style.display = "block";

            console.log("Show comment "+comment.id);
            // sleep 
            await sleep(interval);
        }
    }

    hideReplyBox() {
        // hide reply box
        var replyBox = document.querySelector("#diff-" +this.diff.id +" div.review-thread-reply");
        replyBox.style.display = "none";
        console.log("Hide reply box "+this.diff.id);
    }

    hideCommentBox() {
        var commentBox = document.querySelector("#diff-"+this.diff.id+" > div.js-file-content.Details-content--hidden > div > table > tbody > tr.inline-comments.js-inline-comments-container");
        commentBox.style.display = "none";
        console.log("Hide comment box "+this.diff.id);
    }

    showCommentBox() {
        var commentBox = document.querySelector("#diff-"+this.diff.id+" > div.js-file-content.Details-content--hidden > div > table > tbody > tr.inline-comments.js-inline-comments-container");
        commentBox.style = null;
        console.log("Show comment box "+this.diff.id);
    }

    updateAndHideComments() {
        this.diff.comments.forEach(comment => this.updateAndHideComment(comment));
    }

    updateAndHideComment(comment) {
        var avatar = document.querySelector("#"+comment.id+" > div.previewable-edit.js-suggested-changes-container.js-task-list-container.unminimized-comment.js-comment.current-user.reorderable-task-lists > div > div.js-suggested-changes-contents > span > a > img");
        avatar.src = comment.user.avatar;

        var name = document.querySelector("#"+comment.id+" > div.previewable-edit.js-suggested-changes-container.js-task-list-container.unminimized-comment.js-comment.current-user.reorderable-task-lists > div > div.js-suggested-changes-contents > h4 > strong > a");
        name.innerText = comment.user.name;

        var title = document.querySelector("#"+comment.id+" > div.previewable-edit.js-suggested-changes-container.js-task-list-container.unminimized-comment.js-comment.current-user.reorderable-task-lists > div > div.js-suggested-changes-contents > h4 > div > span:nth-child(1)");
        title.innerText=comment.user.title;

        var owner = document.querySelector("#"+comment.id+" > div.previewable-edit.js-suggested-changes-container.js-task-list-container.unminimized-comment.js-comment.current-user.reorderable-task-lists > div > div.js-suggested-changes-contents > h4 > div > span:nth-child(2)");
        owner.style.display = "none";

        var comment = document.querySelector("#"+comment.id);
        comment.style.display = "none";

        console.log("Hide comment "+comment.id);
    }
}