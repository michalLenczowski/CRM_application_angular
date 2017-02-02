(function(){
	var app=angular.module('crmservices',[]);

	app.factory('routetest', ['$location', function($location){
		return {
			
			isActive:function(location){
				return (-1!==$location.path().indexOf(location));
			}	
		};
	}])

	app.service('DataProvider',function(){
		
		this.users=[
			{id:1,manager_name: 'Konstantyn Kowalski'},
			{id:2,manager_name: 'Łukasz Pawłowski'},
			{id:3,manager_name: 'Zofia Jabłońska'},
			{id:4,manager_name: 'Jan Kowalski'},
			{id:5,manager_name: 'Adam Nowak'}
		];		
		

			this.sectors=[
			{id_sector:1,sectors_name: 'Sklep internetowy'},
			{id_sector:2,sectors_name: 'Wydawnictwo'},
			{id_sector:3,sectors_name: 'Producent odzieży'},
			{id_sector:4,sectors_name: 'Producent suplementów'},
			{id_sector:5,sectors_name: 'Agencja reklamowa'}

		];	


		this.help_options={

			'phone':{
				color:'blue',
				message:'telefon do klienta'
			},
			'envelope':{
				color:'green',
				message:'mail do klienta'
			},
			'users':{
				color:'yellow',
				message:'spotkanie z klientem'
			},
			'file-text':{
				color:'red',
				message:'podpisanie umowy z klientem'
			},
		};
		
		this.eventTypes=[
		{
			value:'phone',
			name:'kontakt telefoniczny'
		},
		{
			value:'envelope',
			name:'kontakt mailowy'
		},
		{
			value:'users',
			name:'Spotkanie'
		},
		{
			value:'file-text',
			name:'podpisanie umowy'
				}
		];

		this.contact_timeline={
			
				'1':[{user_manager:this.users[0].manager_name,contact_date:"2015-01-12 12:00:00",contact_type:"phone",notes:"Lorem ipsum dolor sit amet enim. Etiam ullamcorper..."}],
				'2':[{user_manager:this.users[1].manager_name,contact_date:"2015-01-14 17:30:00",contact_type:"envelope",notes:"Ut molestie a, ultricies porta urna. Vestibulum co..."}],
				'3':[{user_manager:this.users[2].manager_name,contact_date:"2015-01-15 13:15:00",contact_type:"phone",notes:"Phasellus fermentum in, dolor. Pellentesque facili..."}],
				'4':[{user_manager:this.users[3].manager_name,contact_date:"2015-01-21 15:00:00",contact_type:"users",notes:"Quisque lorem tortor fringilla sed, vestibulum id,..."}],
				'5':[{user_manager:this.users[4].manager_name,contact_date:"2015-01-20 12:00:00",contact_type:"file-text",notes:"Cum sociis natoque penatibus et ultrices volutpat...."}]
		}
			

		this.clients=[
			{id:1,company_name:"Lorem ipsum dolor",contact_name: 'Michalina Kwiatkowska', contact_phone:"53 790 92 21",contact_email:"mkwiatkowska@gmail.com",
			manager:this.users[0],notes:"Lorem ipsum dolor sit amet, consectetuer adipiscin...",sector:this.sectors[4],contact:this.contact_timeline['1']},
			{id:2,company_name:"Aenean massa",contact_name: 'Kazimierz Wiśniewski', contact_phone:"88 434 60 33",contact_email:"kwisniewski@gmail.com",
			manager:this.users[1],notes:null,sector:this.sectors[3],contact:this.contact_timeline['2']},
			{id:3,company_name:"Nullam dictum",contact_name: 'Mirosław Nowak', contact_phone:"67 431 58 98",contact_email:"mnowak@gmail.com",
			manager:this.users[2],notes:"Donec quam felis, ultricies nec, pellentesque eu, ...",sector:this.sectors[2],contact:[]},
			{id:4,company_name:"Aliquam lorem ante",contact_name: 'Konstancja Górska', contact_phone:"78 931 86 71",contact_email:"kgorska@gmail.com",
			manager:this.users[3],notes:"In enim justo, rhoncus ut, imperdiet a, venenatis ...",sector:this.sectors[1],contact:[]},
			{id:5,company_name:"Maecenas tempus",contact_name: 'Jan Kowalski', contact_phone:"79 319 44 99",contact_email:"jkowalski@gmail.com",
			manager:this.users[4],notes:null,sector:this.sectors[0],contact:[]},
			{id:6,company_name:"Donec sodales sagittis",contact_name: 'Janek Czerwiński', contact_phone:"58 794 85 24",contact_email:"jczerwinski@gmail.com",
			manager:this.users[0],notes:"Vivamus elementum semper nisi. Aenean vulputate el...",sector:this.sectors[0],contact:[]},
			{id:7,company_name:"Vestibulum purus",contact_name: 'Patrycja Kozłowska', contact_phone:"55 858 22 59",contact_email:"pkozlowska@gmail.com",
			manager:this.users[4],notes:null,sector:this.sectors[1],contact:[]},
			{id:8,company_name:"Etiam sit",contact_name: 'Stanisław Czarnecki', contact_phone:"31 879 45 95",contact_email:"sczarnecki@gmail.com",
			manager:this.users[2],notes:"Aliquam lorem ante, dapibus in, viverra quis, feug...",sector:this.sectors[2],contact:[]},
			{id:9,company_name:"Cras id dui",contact_name: 'Wojciech Grabowski', contact_phone:"78 772 75 31",contact_email:"wgrabowski@gmail.com",
			manager:this.users[3],notes:"Aenean imperdiet. Etiam ultricies nisi vel augue. ...",sector:this.sectors[3],contact:[]},
			{id:10,company_name:"Duis arcu tortor",contact_name: 'Ryszard Piotrowski', contact_phone:"79 435 93 31",contact_email:"rpiotrowski@gmail.com",
			manager:this.users[4],notes:null,sector:this.sectors[4],contact:[]},
			{id:11,company_name:"Phasellus accumsan",contact_name: 'Marek Kucharski', contact_phone:"38 749 49 15",contact_email:"mkucharski@gmail.com",
			manager:this.users[0],notes:"Etiam rhoncus. Maecenas tempus, tellus eget condim...",sector:this.sectors[4],contact:[]},
			{id:12,company_name:"Pellentesque posuere",contact_name: 'Felicja Olszewska', contact_phone:"79 532 30 44",contact_email:"folszewska@gmail.com",
			manager:this.users[1],notes:null,sector:this.sectors[2],contact:[]},
			{id:13,company_name:"Aenean viverra",contact_name: 'Beata Kowal', contact_phone:"79 435 93 31",contact_email:"bkowal@gmail.com",
			manager:this.users[2],notes:null,sector:this.sectors[0],contact:[]},
			{id:14,company_name:"Phasellus gravida",contact_name: 'Paweł Nowakowski', contact_phone:"14 285 94 41",contact_email:"pnowakowski@gmail.com",
			manager:this.users[3],notes:null,sector:this.sectors[1],contact:[]},
			{id:15,company_name:"Phasellus volutpat",contact_name: 'Urszula Adamowska', contact_phone:"13 405 30 55",contact_email:"uadamowska@gmail.com",
			manager:this.users[4],notes:"Donec vitae sapien ut libero venenatis faucibus. N...",sector:this.sectors[3],contact:[]},
			
		];	

		
		this.routedata=null;
		this.index=null;

		this.remove=function(client){

			if(!client.id)return;

			if(!confirm('Czy usunac tego klienta?'))return;
			this.clients.splice(client.id-1,1);
		
		};

		this.update=function(id,client){			
			this.clients[id-1]=client;
		};
		
		
		this.addNewClient=function(client){
			var numb=this.clients.length;
			var lastindex=this.clients[numb-1].id;			
			this.clients.push(client);
			this.clients[lastindex].id=lastindex+1;
			this.clients[lastindex].contact=[];
			this.index=lastindex+1;

		}

		this.parseTimeline=function(timeline){
			angular.forEach(timeline,function(element,index){
				element['contact_date']=new Date(element['contact_date']);
			});

			return timeline;
		};
		
		this.addTimelineEvent=function(id,timeline){
			
			
			this.clients[id-1].contact.push(timeline);
			this.parseTimeline(this.clients[id-1].contact);
				
		};		
	});
})();