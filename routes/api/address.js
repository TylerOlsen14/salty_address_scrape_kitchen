const express = require('express');
const router = express.Router();

//Client Model - Help make queries
const Address = require('../../models/address')

// adding a series of routes

// @route   GET api/items
// @desc    GET all Items
// @access   Public
router.get('/', async (req, res) => { //represents api/items (because we're already in that file)
  await Address.find()
    .then(records => res.json(records))
})

router.get('/:id', async (req, res) => { //represents api/items (because we're already in that file)
  await Address
    .findById(req.params.id)
    .then(address => res.json(address))
})

// @route   POST api/address
// @desc    Create a address entry
// @access   Public
router.post('/', (req, res) => { //represents api/items (because we're already in that file)
  res.send("You just called the post method at '/hello'!\n")
  const newAddress = new Address({
    name: req.body.name, //name comes from a request
    address: req.body.address, //address comes from a request
    url: req.body.url //url comes from a request
  });
  newAddress.save().then(Address => res.json(Address)); //save to the database, spit out JSON
})

// @route   PUT api/address
// @desc    Create a address entry
// @access   Public
router.put('/:id', (req, res) => { //represents api/items (because we're already in that file)
  Address.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, Address) => {
      // Handle any possible database errors
          if (err) return res.status(500).send(err);
          return res.send(Address);
    }
  ) 
});


// @route   DELETE api/addres
// @desc    Delete a address entry
// @access   Public
router.delete('/:id', (req, res) => { //represents api/items (because we're already in that file)
  Address
    .findById(req.params.id)
    .then(address => address.remove()
    .then(() => res.json({sucess: true})))
    .catch (err => res.status(404).json({success: false}))
})


module.exports = router