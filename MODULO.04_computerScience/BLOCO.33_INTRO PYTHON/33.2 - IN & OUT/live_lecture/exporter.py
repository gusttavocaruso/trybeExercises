import csv


def export_data(data):
    with open("resport.csv", mode="w") as file:
        report_writer = csv.writer(file)
        for key, value in data.items():
            report_writer.writerow([key, value])


if __name__ == "__main__":
    export_data({"c": "v", 123: 456})
