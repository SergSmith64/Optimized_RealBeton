$(document).ready(function() {


	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", 'zakaz-beton');
		yaCounter38014065.reachGoal('zakaz-beton');
		return true;
	}));



	$(".popup").magnificPopup();

	//___СОВМЕСТИЛ ДВЕ СТРОКИ ПОСЛЕ ЗАКРЫТИЯ ФУНКЦИИ___ЗАРАБОТАЛО!!!
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Вы получили скидку на бетон! В ближайшее время мы Вам перезвоним.");
			setTimeout(function() {
				$.magnificPopup.close();
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("#form_z").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_z.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку обратного звонка. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_z").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_d").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_d.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку ДОСТАВКИ. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_d").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_b").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_b.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на БЕТОН. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_b").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_p").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_p.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на ПЕСКОБЕТОН. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_p").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_k").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_k.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на КЕРАМЗИТОБЕТОН. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_k").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_f").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_f.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на БЛОКИ-ФБС. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_f").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_s").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_s.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на ЩЕБЕНЬ. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_s").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_e").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_e.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку на ПЕСОК. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form_e").trigger("reset");
			}, 1000);
		});
		return false;
	});


	
});