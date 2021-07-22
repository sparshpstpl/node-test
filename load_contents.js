import fs from 'fs';

const path = process.argv[2];

async function getFileContents(path) {
     try {
          const exist = await fs.existsSync(path);
          if (exist) {
               const stats = fs.statSync(path);
               if (stats.size > 0) {
                    return {
                         status: true,
                         data: fs.readFileSync(path)
                    };
               } else {
                    return {
                         status: false,
                         message: `File exists but there is no content`
                    };
               }
          } else {
               return {
                    status: false,
                    message: `File does not exist`
               };
          }
     } catch (error) {
          return {
               status: false,
               message: `There was an error getting contents for ${path}`,
               error
          };
     }
}

async function init() {
     const fileContent = await getFileContents(path);
     if (fileContent.status) {
          console.log('File content loaded');
          const buffer = fileContent.data;
          console.log(buffer);
     } else {
          console.log(fileContent.message);
     }
}
init();
