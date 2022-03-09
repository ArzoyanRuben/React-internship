export async function getTableItems() {
    try {
      const response = await fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }