var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: "Genre",
    }],
});

// Virtual for book's URL
BookSchema.virtual('url').get(function () {
    return '/catalog/book/' + this._id;
})

// Virtual for book's formatted due back
BookSchema
    .virtual('due_back_formatted')
    .get(function () {
        DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
    });

module.exports = mongoose.model('Book', BookSchema);