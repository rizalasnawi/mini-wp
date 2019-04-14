const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Article must have a title'],
    minlength: [5, 'Title must have more than 5 characters']
  },
  content: {
    type: String
  },
  featured_image: {
    type: String
  }
},
{ 
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
  }
});

const Artilce = mongoose.model('Article', articleSchema);

module.exports = Artilce;