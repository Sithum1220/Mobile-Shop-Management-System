const Counter = require('../model/counter');

async function getNextSequence(sequenceName) {
    const sequenceDocument = await Counter.findByIdAndUpdate(
        sequenceName,
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }  // Create a new document if it doesn't exist
    );

    return sequenceDocument.sequence_value;
}

module.exports = getNextSequence;