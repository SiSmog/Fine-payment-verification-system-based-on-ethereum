import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs'

const ipfsOptions = { repo : './ipfs', start: true,init:false}
const ipfs = await IPFS.create(ipfsOptions)
const orbitdb = await OrbitDB.createInstance(ipfs)
const db = await orbitdb.eventlog('orbit.test')
await db.load()

export default db