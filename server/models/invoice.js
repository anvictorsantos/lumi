const pool = require("../config/database");

class Invoice {
  static async getAllInvoices() {
    try {
      const result = await pool.query("SELECT * FROM invoice");
      return result.rows;
    } catch (error) {
      throw new Error("Error fetching invoices: " + error.message);
    }
  }
  static async getInvoiceById(id) {
    try {
      const result = await pool.query("SELECT * FROM invoice WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error("Error fetching invoice: " + error.message);
    }
  }

  static async createInvoice(invoiceData) {
    try {
      const { title, description } = invoiceData;
      const result = await pool.query(
        "INSERT INTO invoice (title, description) VALUES ($1, $2) RETURNING *",
        [title, description]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error creating invoice: " + error.message);
    }
  }

  static async updateInvoice(id, invoiceData) {
    try {
      const { title, description } = invoiceData;
      const result = await pool.query(
        "UPDATE invoice SET title = $1, description = $2 WHERE id = $3 RETURNING *",
        [title, description, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error updating invoice: " + error.message);
    }
  }

  static async deleteInvoice(id) {
    try {
      const result = await pool.query(
        "DELETE FROM invoice WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error("Error deleting invoice: " + error.message);
    }
  }
}

module.exports = Invoice;
