import DeveloperModel from '../models/Developer'
import { generateID, connectDatastore } from '../datastore'
import { getGamePlatformCountD, deleteGamesD } from './Game'

// Create new game developer.
export async function createDeveloper(req) {
    // Create developer model.
    const Developer = DeveloperModel.create({
        _id: generateID(),
        name: req.name
    })
    // Save model to database.
    return await Developer.save()
}

// Update a specific developer.
export async function updateDeveloper(req, id) {
    await DeveloperModel.findOneAndUpdate({ _id: id }, { name: req.name })
}

// Delete a specific developer.
export async function deleteDeveloper(req) {
    // Compact database.
    await connectDatastore().then(async () => {
        // Delete all of the developer's related games.
        await deleteGamesD(req)
        // Delete the developer itself.
        await DeveloperModel.findOneAndDelete({ _id: req })
    })
}

// Search for a specific developer.
export async function getDeveloper(req) {
    return await DeveloperModel.findOne({ _id: req })
}

// Search for all developers in the database matching the given name.
export async function getDeveloperByName(q) {
    let query = new RegExp(q, 'i')
    // Search through developers, case insensitive.
    return await DeveloperModel.find({ name: query })
}

// Search for all developers.
export async function getDevelopers(index, count) {
    return await DeveloperModel.find({}, { skip: index, limit: count, sort: 'name' })
        .then(async res => {
            // Loop through all the items in 'res'.
            for (let developer of res) {
                // Get and add titles count to the object.
                await getGamePlatformCountD(developer._id)
                    .then(count => {
                        developer.titles = count
                    })
            }
            // Return object.
            return res
        })
}