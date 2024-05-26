const Invoice = require("../models/invoice");

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.getAllInvoices();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.getInvoiceById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await Invoice.updateInvoice(req.params.id, req.body);
    res.json(updatedInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const deletedInvoice = await Invoice.deleteInvoice(req.params.id);
    res.json(deletedInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
