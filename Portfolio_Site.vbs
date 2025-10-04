Set objShell = CreateObject("WScript.Shell")
Set objExec = objShell.Exec("cmd /c netstat -aon | find ""5500""")
strOutput = LCase(objExec.StdOut.ReadAll)

If InStr(strOutput, "listening") = 0 Then
    objShell.CurrentDirectory = "C:\ABHI Production\Yash_mane_portfolio_website"
    objShell.Run "cmd /c python -m http.server 5500 --bind 0.0.0.0", 0
End If
