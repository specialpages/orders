self.addEventListener("notificationclick",event=>{
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:"window",includeUncontrolled:true}).then(list=>{
      if(list.length && "focus" in list[0]) return list[0].focus();
      if(clients.openWindow) return clients.openWindow("./admin.html");
    })
  );
});
