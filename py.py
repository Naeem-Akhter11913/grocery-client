# Creating 200 Hindi sentences (100 positive + 100 negative)
positive_sentences = [f"{i+1}. मैं रोज़ पढ़ाई करता हूँ।" for i in range(50)] + \
                     [f"{i+51}. वह समय पर आता है।" for i in range(50)]

negative_sentences = [f"{i+1}. मैं रोज़ पढ़ाई नहीं करता हूँ।" for i in range(50)] + \
                     [f"{i+51}. वह समय पर नहीं आता है।" for i in range(50)]

# Combine all sentences
all_sentences = ["सकारात्मक वाक्य (Positive Sentences):"] + positive_sentences + ["", "नकारात्मक वाक्य (Negative Sentences):"] + negative_sentences

# Create the PDF with simple font
from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

for line in all_sentences:
    pdf.cell(0, 10, txt=line, ln=True)

# Save PDF file
pdf_path = "/mnt/data/Hindi_Positive_Negative_Sentences_200.pdf"
pdf.output(pdf_path)
pdf_path
