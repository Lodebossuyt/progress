var addin = document.getElementById('controlAddIn');

addin.innerHTML = '<div id="myProgress"><div id="myBar">0%</div></div>';

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('IamReady', []);