Author = require('../models/').Author;
Book = require('../models/').Book;


module.exports = {
	index(req, res){
		Author.findAll({
			// return the books associated with each author
			include: Book
		}).then(function(authors){
			sendResult(res, authors);
		}).catch(function(error){
			sendError(res, error);
		});
	},
	show(req, res){
		Author.findById(req.params.id, {
			// return all books for author
			include: Book
		}).then(function(author){
			sendResult(res, author);
		}).catch(function(error){
			sendError(res, error);
		});
	},
	create(req, res){
		Author.create(req.body)
			.then(function(newAuthor){
				sendResult(res, newAuthor);
			})
			.catch(function(error){
				sendError(res, error);
			});
	},
	update(req, res){
		Author.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function(updatedAuthor){
			sendResult(res, updatedAuthor);
		})
		.catch(function(err){
			sendError(res, err);
		});
	},
	delete(req, res){
		Author.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(deletedRecord){
			sendResult(res, deletedRecord);
		})
		.catch(function(err){
			sendError(res, err);
		});
	}
}

// helper functions
function sendResult(res, result){
	res.status(200).json(result);
}

function sendError(res, result){
	res.status(500).json(result);
}
