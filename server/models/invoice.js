const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Invoice {
  static async getAllInvoices() {
    try {
      return await prisma.invoice.findMany();
    } catch (error) {
      throw new Error("Error fetching invoices: " + error.message);
    }
  }
  static async getInvoiceById(id) {
    try {
      return await prisma.invoice.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Error fetching invoice: " + error.message);
    }
  }

  static async createInvoice(invoiceData) {
    try {
      return await prisma.invoice.create({
        data: invoiceData,
      });
    } catch (error) {
      throw new Error("Error creating invoice: " + error.message);
    }
  }

  static async updateInvoice(id, invoiceData) {
    try {
      return await prisma.invoice.update({
        where: {
          id: id,
        },
        data: invoiceData,
      });
    } catch (error) {
      throw new Error("Error updating invoice: " + error.message);
    }
  }

  static async deleteInvoice(id) {
    try {
      return await prisma.invoice.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Error deleting invoice: " + error.message);
    }
  }
}

module.exports = Invoice;
