

const path = require('path');
const cwd = process.cwd();

// require('child_process').execSync(`cd ${cwd} && rm -rf docs`);

const sortedDirArr = [];

require('generate-docs-by-github-issue')({
    username: 'hoperyy',
    repo: 'front-end-engineering',
    targetDir: path.join(cwd, 'cached-docs'),
    beforeSort(issues) {
        issues.forEach(issueItem => {
            // 去掉标题中的 / 字符和空格
            issueItem.title = issueItem.title.replace(/\//g, '-').replace(/\s/g, '').replace(/(\[)|(\])/g, '-');
        });
    },

    afterSort(issues) {
        issues.forEach(issueItem => {
            console.log(`+  [${issueItem.title}](${issueItem.html_url})`);
        });
    }
});