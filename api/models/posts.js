const { readFile, writeFile } = require('fs').promises
const path = require('path')

const readDB = async () => {
  try {
    const data = await readFile(path.resolve(__dirname, '../db/db.json'), 'utf-8')
    const someData = await JSON.parse(data)
    return someData
  } catch (error) {
    console.log(error)
  }
}

const updateDB = async (newData) => {
  try {
    await writeFile(path.resolve(__dirname, '../db/db.json'), JSON.stringify(newData))
  } catch (error) {
    console.log(error)
  }
}

module.exports = { readDB, updateDB }
