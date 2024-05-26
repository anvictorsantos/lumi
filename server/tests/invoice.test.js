const {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} = require("../models/invoice");

// Mock PrismaClient and its methods
jest.mock("../models/invoice", () => ({
  createInvoice: jest.fn(),
  getAllInvoices: jest.fn(),
  getInvoiceById: jest.fn(),
  updateInvoice: jest.fn(),
  deleteInvoice: jest.fn(),
}));

describe("Invoice model", () => {
  test("createInvoice should create a new invoice", async () => {
    const invoiceData = {
      description: "INV-001",
    };

    createInvoice.mockResolvedValueOnce(invoiceData); // Mocking successful creation

    const createdInvoice = await createInvoice(invoiceData);

    expect(createInvoice).toHaveBeenCalledWith(invoiceData);
    expect(createdInvoice).toEqual(invoiceData);
  });

  test("getAllInvoices should return an array of invoices", async () => {
    const invoices = [{ id: 1, description: "INV-001" }];
    getAllInvoices.mockResolvedValueOnce(invoices);

    const retrievedInvoices = await getAllInvoices();

    expect(getAllInvoices).toHaveBeenCalledTimes(1);
    expect(retrievedInvoices).toEqual(invoices);
  });

  test("getInvoiceById should return the correct invoice", async () => {
    const invoiceId = 1;
    const invoiceData = {
      id: invoiceId,
      description: "INV-001",
    };
    getInvoiceById.mockResolvedValueOnce(invoiceData);

    const retrievedInvoice = await getInvoiceById(invoiceId);

    expect(getInvoiceById).toHaveBeenCalledWith(invoiceId);
    expect(retrievedInvoice).toEqual(invoiceData);
  });

  test("updateInvoice should update an existing invoice", async () => {
    const invoiceId = 1;
    const updatedInvoiceData = { description: "INV-002" };
    updateInvoice.mockResolvedValueOnce(updatedInvoiceData);

    const updatedInvoice = await updateInvoice(invoiceId, updatedInvoiceData);

    expect(updateInvoice).toHaveBeenCalledWith(invoiceId, updatedInvoiceData);
    expect(updatedInvoice).toEqual(updatedInvoiceData);
  });

  test("deleteInvoice should delete an existing invoice", async () => {
    const invoiceId = 1;
    deleteInvoice.mockResolvedValueOnce();

    await deleteInvoice(invoiceId);

    expect(deleteInvoice).toHaveBeenCalledWith(invoiceId);
  });
});
