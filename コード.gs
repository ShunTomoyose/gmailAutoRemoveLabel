function removeLabel() {
  var count = 0;
  var threads = GmailApp.search('subject:saru訪問者集計 SARU関係者の皆さま')
//  var threads = GmailApp.search('subject:testestestes');
  var label = GmailApp.getUserLabelByName('01 Me');
  
  count = threads.length;
  Logger.log(threads);
  Logger.log(label);
  if(count > 0){
    for(var i=0;i<count;i++){
      threads[i].removeLabel(label);
    }
  }
  Logger.log(count);
  return;
}
