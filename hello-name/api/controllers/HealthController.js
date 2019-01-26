"use strict";
let lib = {
	"name" : function (req, res) {
        let name = req.query.name || "No Name :(";
		return res.ok({"test":"This is a response for " + name});
	},
	"test" : function (req, res) {
		return res.ok({test:"this is the health response from machine" + req.ip});
	}
};

module.exports = lib;
