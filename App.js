const fs = require('node:fs/promises');
const path = require('node:path');

const worker = async () => {
    try {
        // const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
        // const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];
        //
        // for (const folderName of folderNames) {
        //     await fs.mkdir(path.join(process.cwd(), folderName), {recursive: true});
        // }
        // for (const fileName of fileNames) {
        //     await fs.writeFile(path.join(process.cwd(), fileName), 'HELLO MENTOR');
        // }

        const files = await fs.readdir((path.join(process.cwd())));
        for (const file of files) {
            const stars = await fs.stat(path.join(process.cwd(), file));
            const isFile = stars.isFile();
            console.log(isFile)
            if (isFile) {
                console.log('This is file:', path.join(process.cwd(), file))
            } return;
            console.log('this is directory:', path.join(process.cwd(), file))

        }

    } catch (e) {
        console.log(e.message)
    }
}

worker().then();