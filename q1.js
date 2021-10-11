var no = window.prompt("Enter your Number: ");
var a=no.split(",");
  
 // var a=[5,4,2,8,2,1,4,5,8,5,2,8,8,8];  
    // 5,4,2,8,2,1,4,5,8,5,2,8,8,8
    var b=[];

    for( i=0;i<a.length;i++)
    {
        var count=0;
        for(j=0;j<b.length;j++)
        {
            if(a[i]==b[j])
            {
                count++;
            }
        }
        if(count==0)
        {
            b.push(a[i]);
        } 
    }
    b.sort();
    var c=[];
    for(i=0;i<b.length;i++)
    {
        var cnt =0;
        for(j=0;j<a.length;j++)
        {
            if(b[i]==a[j])
            {
                cnt++;
            }
        }
        c.push(cnt);
    }
    for(var i=0;i<b.length;i++)
    {
        console.log(b[i]+' : '+ c[i]);
    }
   
