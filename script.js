function calculatePositionSize() {
  // Get input values
  var accountCurrency = document.getElementById("accountCurrency").value;
  var currencyPair = document.getElementById("currencyPair").value;
  var balance = parseFloat(document.getElementById("balance").value);
  var riskPercentage = parseFloat(document.getElementById("risk").value);
  var stopLoss = parseFloat(document.getElementById("stopLoss").value);
  var rewardPercentage = parseFloat(document.getElementById("rewardPercentage").value);

  // Calculate position size
  var amountAtRisk = (balance * riskPercentage) / 100;
  var positionSize = amountAtRisk / stopLoss;
  var reward = amountAtRisk * (rewardPercentage );

  // Display results
  document.getElementById("results").innerHTML = `
    <dl>
      <dt>Amount at Risk (${accountCurrency})   : </dt>
      <dd>${amountAtRisk.toFixed(2)}</dd><br>
      <dt>Position Size (units)                         : </dt>
      <dd>${positionSize.toFixed(2)}</dd><br>
      <dt>Reward (${accountCurrency})                    : </dt>
      <dd>${reward.toFixed(2)}</dd>
    </dl>
`;

}